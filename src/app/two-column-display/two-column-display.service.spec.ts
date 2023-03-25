import { HttpClientModule } from "@angular/common/http"
import { TestBed } from "@angular/core/testing"

import { TwoColumnDisplayService } from "./two-column-display.service"

describe("TwoColumnDisplayService", () => {
  let service: TwoColumnDisplayService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
    service = TestBed.inject(TwoColumnDisplayService)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })
})
