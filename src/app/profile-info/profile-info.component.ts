import { CommonModule } from "@angular/common"
import { Component, OnDestroy, OnInit } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatIconModule } from "@angular/material/icon"
import { MatInputModule } from "@angular/material/input"
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar"
import { Subject, takeUntil } from "rxjs"

import { AuthService } from "../auth/auth.service"
import { ImageUploaderComponent } from "../image-uploader/image-uploader.component"

import { ProfileInfoService } from "./profile-info.service"

@Component({
  selector: "app-profile-info",
  standalone: true,

  imports: [
    CommonModule,
    ImageUploaderComponent,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
  ],

  templateUrl: "./profile-info.component.html",
  styleUrls: ["./profile-info.component.scss"],
})
export class ProfileInfoComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>()

  headerUrl?: string

  avatarUrl?: string

  name?: string

  title?: string

  about?: string

  constructor(
    private readonly profileInfoService: ProfileInfoService,
    private readonly authService: AuthService,
    private readonly snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.profileInfoService
      .getProfileInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ headerUrl, avatarUrl, name, title, about }) => {
        this.headerUrl = headerUrl
        this.avatarUrl = avatarUrl
        this.name = name
        this.title = title
        this.about = about
      })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn
  }

  showSaved(part: string) {
    this.snackBar.open(`${part} Saved`, "Dismiss")
  }

  onHeaderUrlChange(url: string) {
    this.headerUrl = url
    this.profileInfoService
      .updateHeaderUrl(url)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showSaved("Header")
      })
  }

  onAvatarUrlChange(url: string) {
    this.avatarUrl = url
    this.profileInfoService
      .updateAvatarUrl(url)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.showSaved("Avatar")
      })
  }

  onNameChange() {
    if (this.name) {
      this.profileInfoService
        .updateName(this.name)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.showSaved("Name")
        })
    }
  }

  onTitleChange() {
    if (this.title) {
      this.profileInfoService
        .updateTitle(this.title)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.showSaved("Title")
        })
    }
  }

  onAboutChange() {
    if (this.about) {
      this.profileInfoService
        .updateAbout(this.about)
        .pipe(takeUntil(this.destroy$))
        .subscribe(() => {
          this.showSaved("About")
        })
    }
  }
}
