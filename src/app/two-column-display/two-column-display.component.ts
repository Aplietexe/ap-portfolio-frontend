import { CommonModule } from "@angular/common"
import { Component, Input, OnDestroy, OnInit } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatIconModule } from "@angular/material/icon"
import { MatSnackBar } from "@angular/material/snack-bar"
import {
  map,
  merge,
  mergeMap,
  Observable,
  shareReplay,
  Subject,
  take,
  takeUntil,
  tap,
} from "rxjs"

import { AuthService } from "../auth/auth.service"

import { DisplayItem } from "./display-item.model"
import { DisplayItemComponent } from "./display-item/display-item.component"
import { TwoColumnDisplayService } from "./two-column-display.service"

@Component({
  selector: "app-two-column-display",
  standalone: true,
  imports: [CommonModule, DisplayItemComponent, MatIconModule, MatButtonModule],
  templateUrl: "./two-column-display.component.html",
  styleUrls: ["./two-column-display.component.scss"],
})
export class TwoColumnDisplayComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>()

  @Input() sectionTitle = ""

  @Input() endpoint?: string

  private newItemId = -1

  displayItems$ = new Observable<DisplayItem[]>()

  private readonly changedDisplayItems$ = new Subject<DisplayItem[]>()

  constructor(
    private readonly twoColumnDisplayService: TwoColumnDisplayService,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    if (this.endpoint) {
      const apiDisplayItems$ = this.twoColumnDisplayService
        .getItems(this.endpoint)
        .pipe(take(1))

      this.displayItems$ = merge(
        apiDisplayItems$,
        this.changedDisplayItems$,
      ).pipe(shareReplay({ bufferSize: 1, refCount: true }))
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  private deleteLocalItem(id: number) {
    this.displayItems$
      .pipe(
        take(1),
        map((displayItems) => displayItems.filter((item) => item.id !== id)),
        takeUntil(this.destroy$),
      )
      .subscribe((displayItems) => {
        this.changedDisplayItems$.next(displayItems)
      })
  }

  private deleteItem(id: number) {
    if (!this.endpoint) {
      return
    }

    this.deleteLocalItem(id)

    this.twoColumnDisplayService
      .deleteItem(this.endpoint, id)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.snackBar.open("Deleted", "Dismiss", {
          duration: 2000,
        })
      })
  }

  onItemDelete(id: number) {
    if (id < 0) {
      this.deleteLocalItem(id)
      this.snackBar.open("Deleted", "Dismiss", {
        duration: 2000,
      })
    } else {
      this.deleteItem(id)
    }
  }

  private updateItem(newItem: DisplayItem) {
    if (!this.endpoint) {
      return
    }

    this.displayItems$
      .pipe(
        take(1),
        map((items) => {
          const index = items.findIndex((item) => item.id === newItem.id)
          const updatedItems = Array.from(items)
          updatedItems[index] = newItem
          return updatedItems
        }),
        takeUntil(this.destroy$),
      )
      .subscribe((displayItems) => {
        this.changedDisplayItems$.next(displayItems)
      })

    this.twoColumnDisplayService
      .updateItem(this.endpoint, newItem)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.snackBar.open(`${this.sectionTitle} saved`, "Dismiss", {
          duration: 2000,
        })
      })
  }

  private createItem(newItem: DisplayItem) {
    if (!this.endpoint) {
      return
    }

    const currentEndpoint = this.endpoint

    this.twoColumnDisplayService
      .createItem(this.endpoint, newItem)
      .pipe(
        take(1),
        mergeMap(() => this.twoColumnDisplayService.getItems(currentEndpoint)),
        tap((displayItems) => {
          this.changedDisplayItems$.next(displayItems)
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.snackBar.open(`${this.sectionTitle} created`, "Dismiss", {
          duration: 2000,
        })
      })
  }

  onItemSave(newItem: DisplayItem) {
    if (newItem.id < 0) {
      this.createItem(newItem)
    } else {
      this.updateItem(newItem)
    }
  }

  addItem() {
    if (!this.endpoint) {
      return
    }

    this.displayItems$
      .pipe(
        take(1),
        map((items) => {
          const newItem = {
            id: this.newItemId,
            title: "",
            subtitle: "",
            description: "",
            image: "https://placehold.co/150",
          }

          this.newItemId -= 1

          return [...items, newItem]
        }),
        tap((items) => {
          this.changedDisplayItems$.next(items)
        }),
        takeUntil(this.destroy$),
      )
      .subscribe()
  }
}
