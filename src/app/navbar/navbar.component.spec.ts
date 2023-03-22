import { CommonModule, NgOptimizedImage } from "@angular/common"
import { HttpClientModule } from "@angular/common/http"
import { TestBed, type ComponentFixture } from "@angular/core/testing"
import { MatButtonModule } from "@angular/material/button"
import { MatToolbarModule } from "@angular/material/toolbar"

import { NavbarComponent } from "./navbar.component"

describe("NavbarComponent", () => {
  let component: NavbarComponent
  let fixture: ComponentFixture<NavbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NavbarComponent,
        CommonModule,
        MatToolbarModule,
        NgOptimizedImage,
        MatButtonModule,
        HttpClientModule,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(NavbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
