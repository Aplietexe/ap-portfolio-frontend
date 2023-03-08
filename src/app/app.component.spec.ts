import { TestBed, type ComponentFixture } from "@angular/core/testing"

import { AppComponent } from "./app.component"
import { ExperienceSectionComponent } from "./experience-section/experience-section.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { ProfileInfoComponent } from "./profile-info/profile-info.component"

describe("AppComponent", () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],

      imports: [
        NavbarComponent,
        ProfileInfoComponent,
        ExperienceSectionComponent,
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create the app", () => {
    expect(component).toBeTruthy()
  })
})
