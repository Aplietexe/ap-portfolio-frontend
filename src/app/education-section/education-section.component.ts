import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

import { TwoColumnDisplayComponent } from "../two-column-display/two-column-display.component"

@Component({
  selector: "app-education-section",
  standalone: true,
  imports: [CommonModule, TwoColumnDisplayComponent],
  templateUrl: "./education-section.component.html",
  styleUrls: ["./education-section.component.scss"],
})
export class EducationSectionComponent {}
