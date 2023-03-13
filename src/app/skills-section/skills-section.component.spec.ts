import { TestBed, type ComponentFixture } from "@angular/core/testing"

import { SkillsSectionComponent } from "./skills-section.component"

describe("SkillsSectionComponent", () => {
  let component: SkillsSectionComponent
  let fixture: ComponentFixture<SkillsSectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsSectionComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(SkillsSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
