import { TestBed, type ComponentFixture } from "@angular/core/testing"

import { AppComponent } from "./app.component"
import { EducationSectionComponent } from "./education-section/education-section.component"
import { ExperienceSectionComponent } from "./experience-section/experience-section.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { ProfileInfoComponent } from "./profile-info/profile-info.component"
import { SkillsSectionComponent } from "./skills-section/skills-section.component"

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
        EducationSectionComponent,
        SkillsSectionComponent,
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
