import { CommonModule, NgOptimizedImage } from "@angular/common"
import { Component } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatDialog, MatDialogModule } from "@angular/material/dialog"
import { MatToolbarModule } from "@angular/material/toolbar"

import { AuthService } from "../auth/auth.service"
import { LoginDialogComponent } from "../login-dialog/login-dialog.component"

@Component({
  selector: "app-navbar",
  standalone: true,

  imports: [
    CommonModule,
    MatToolbarModule,
    NgOptimizedImage,
    MatButtonModule,
    MatDialogModule,
  ],

  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  constructor(
    private readonly dialog: MatDialog,
    private readonly authService: AuthService,
  ) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn
  }

  openDialog() {
    this.dialog.open(LoginDialogComponent)
  }

  logout() {
    this.authService.logout()
  }
}
