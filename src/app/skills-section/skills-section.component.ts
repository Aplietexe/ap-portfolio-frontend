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
import { DisplayItem } from "../two-column-display/display-item.model"

import { SkillComponent } from "./skill/skill.component"
import { SkillService } from "./skill/skill.service"

@Component({
  selector: "app-skills-section",
  standalone: true,
  imports: [CommonModule, SkillComponent, MatIconModule, MatButtonModule],
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.scss"],
})
export class SkillsSectionComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>()

  private newItemId = -1

  skills$ = new Observable<DisplayItem[]>()

  private readonly changedSkills$ = new Subject<DisplayItem[]>()

  constructor(
    private readonly skillsService: SkillService,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    const apiSkills$ = this.skillsService.getItems().pipe(take(1))

    this.skills$ = merge(apiSkills$, this.changedSkills$).pipe(
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
    this.skills$
      .pipe(
        take(1),
        map((displayItems) => displayItems.filter((item) => item.id !== id)),
        takeUntil(this.destroy$),
      )
      .subscribe((displayItems) => {
        this.changedSkills$.next(displayItems)
      })
  }

  private deleteItem(id: number) {
    this.deleteLocalItem(id)

    this.skillsService
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

  private updateItem(newItem: DisplayItem) {
    this.skills$
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
        this.changedSkills$.next(displayItems)
      })

    this.skillsService
      .updateItem(newItem)
      .pipe(take(1), takeUntil(this.destroy$))
      .subscribe(() => {
        this.snackBar.open("Skills saved", "Dismiss", {
          duration: 2000,
        })
      })
  }

  private createItem(newItem: DisplayItem) {
    this.skillsService
      .createItem(newItem)
      .pipe(
        take(1),
        mergeMap(() => this.skillsService.getItems()),
        tap((displayItems) => {
          this.changedSkills$.next(displayItems)
        }),
        takeUntil(this.destroy$),
      )
      .subscribe(() => {
        this.snackBar.open("Skill created", "Dismiss", {
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
    this.skills$
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
          this.changedSkills$.next(items)
        }),
        takeUntil(this.destroy$),
      )
      .subscribe()
  }
}
