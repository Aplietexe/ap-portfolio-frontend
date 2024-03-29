import { HttpClientModule } from "@angular/common/http"
import { TestBed, type ComponentFixture } from "@angular/core/testing"

import { LanguagesSectionComponent } from "./languages-section.component"

describe("LanguagesSectionComponent", () => {
  let component: LanguagesSectionComponent
  let fixture: ComponentFixture<LanguagesSectionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguagesSectionComponent, HttpClientModule],
    }).compileComponents()

    fixture = TestBed.createComponent(LanguagesSectionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
