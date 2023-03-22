import { CommonModule } from "@angular/common"
import { Component, OnDestroy, OnInit } from "@angular/core"
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { MatButtonModule } from "@angular/material/button"
import { MatCardModule } from "@angular/material/card"
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog"
import { MatFormFieldModule } from "@angular/material/form-field"
import { MatInputModule } from "@angular/material/input"
import { Subject, takeUntil, tap } from "rxjs"

import { AuthService } from "../auth/auth.service"

@Component({
  selector: "app-login-dialog",
  standalone: true,

  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
  ],

  templateUrl: "./login-dialog.component.html",
  styleUrls: ["./login-dialog.component.scss"],
})
export class LoginDialogComponent implements OnInit, OnDestroy {
  loginForm!: FormGroup<{
    email: FormControl<string | null>
    password: FormControl<string | null>
  }>

  private readonly destroy$ = new Subject<void>()

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authService: AuthService,
    private readonly dialogReference: MatDialogRef<LoginDialogComponent>,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    })
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }

  onSubmit() {
    const email = this.loginForm.controls.email.value
    const password = this.loginForm.controls.password.value

    if (email && password) {
      this.authService
        .login$(email, password)
        .pipe(
          tap(() => {
            this.close()
          }),
          takeUntil(this.destroy$),
        )
        .subscribe()
    }
  }

  close() {
    this.dialogReference.close()
  }
}
