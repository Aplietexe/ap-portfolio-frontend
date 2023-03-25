import { CommonModule } from "@angular/common"
import { Component, OnDestroy, OnInit } from "@angular/core"
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

import { LanguageComponent } from "./language/language.component"
import { Language } from "./language/language.model"
import { LanguageService } from "./language/language.service"

@Component({
  selector: "app-languages-section",
  standalone: true,
  imports: [CommonModule, LanguageComponent, MatIconModule, MatButtonModule],
  templateUrl: "./languages-section.component.html",
  styleUrls: ["./languages-section.component.scss"],
})
export class LanguagesSectionComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>()

  private newItemId = -1

  languages$ = new Observable<Language[]>()

  private readonly changedLanguages$ = new Subject<Language[]>()

  constructor(
    private readonly languageService: LanguageService,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    const apiLanguages$ = this.languageService.getItems().pipe(take(1))

    this.languages$ = merge(apiLanguages$, this.changedLanguages$).pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
    )
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn
  }

  private deleteLocalItem(id: number) {
    this.languages$
      .pipe(
        take(1),
        map((displayItems) => displayItems.filter((item) => item.id !== id)),
        takeUntil(this.destroy$),
      )
      .subscribe((displayItems) => {
        this.changedLanguages$.next(displayItems)
      })
  }

  private deleteItem(id: number) {
    this.deleteLocalItem(id)

    this.languageService
      .deleteItem(id)
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

  private updateItem(newItem: Language) {
    this.languages$
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
        this.changedLanguages$.next(displayItems)
      })

    this.languageService
      .updateItem(newItem)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.snackBar.open("Skills saved", "Dismiss", {
          duration: 2000,
        })
      })
  }

  private createItem(newItem: Language) {
    this.languageService
      .createItem(newItem)
      .pipe(
        take(1),
        mergeMap(() => this.languageService.getItems()),
        tap((displayItems) => {
          this.changedLanguages$.next(displayItems)
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.snackBar.open("Skill created", "Dismiss", {
          duration: 2000,
        })
      })
  }

  onItemSave(newItem: Language) {
    if (newItem.id < 0) {
      this.createItem(newItem)
    } else {
      this.updateItem(newItem)
    }
  }

  addItem() {
    this.languages$
      .pipe(
        take(1),
        map((items) => {
          const newItem = {
            id: this.newItemId,
            image: "https://placehold.co/250x150",
            name: "",
            level: "",
          }

          this.newItemId -= 1

          return [...items, newItem]
        }),
        tap((items) => {
          this.changedLanguages$.next(items)
        }),
        takeUntil(this.destroy$),
      )
      .subscribe()
  }
}
