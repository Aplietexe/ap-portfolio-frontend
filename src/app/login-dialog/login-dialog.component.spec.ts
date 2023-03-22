import { HttpClientModule } from "@angular/common/http"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { LoginDialogComponent } from "./login-dialog.component"

describe("LoginDialogComponent", () => {
  let component: LoginDialogComponent
  let fixture: ComponentFixture<LoginDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LoginDialogComponent,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule,
      ],

      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(LoginDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
