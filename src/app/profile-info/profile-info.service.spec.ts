import { HttpClientModule } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"

import { ProfileInfoService } from "./profile-info.service"

describe("ProfileInfoService", () => {
  let service: ProfileInfoService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProfileInfoService],
      imports: [HttpClientModule],
    })
    service = TestBed.inject(ProfileInfoService)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })
})
