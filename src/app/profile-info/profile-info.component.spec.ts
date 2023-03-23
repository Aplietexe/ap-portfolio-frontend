import { HttpClientModule } from "@angular/common/http"
import { TestBed, type ComponentFixture } from "@angular/core/testing"

import { ProfileInfoComponent } from "./profile-info.component"

describe("ProfileInfoComponent", () => {
  let component: ProfileInfoComponent
  let fixture: ComponentFixture<ProfileInfoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileInfoComponent, HttpClientModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ProfileInfoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
