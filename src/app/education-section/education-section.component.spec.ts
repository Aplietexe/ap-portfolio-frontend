import { HttpClientModule } from "@angular/common/http"
import { TestBed, type ComponentFixture } from "@angular/core/testing"

import { EducationSectionComponent } from "./education-section.component"

describe("EducationSectionComponent", () => {
  let component: EducationSectionComponent
  let fixture: ComponentFixture<EducationSectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationSectionComponent, HttpClientModule],
    }).compileComponents()

    fixture = TestBed.createComponent(EducationSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
