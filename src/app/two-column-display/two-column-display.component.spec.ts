import { HttpClientModule } from "@angular/common/http"
import { TestBed, type ComponentFixture } from "@angular/core/testing"

import { TwoColumnDisplayComponent } from "./two-column-display.component"

describe("TwoColumnDisplayComponent", () => {
  let component: TwoColumnDisplayComponent
  let fixture: ComponentFixture<TwoColumnDisplayComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoColumnDisplayComponent, HttpClientModule],
    }).compileComponents()

    fixture = TestBed.createComponent(TwoColumnDisplayComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
