import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

import { TwoColumnDisplayComponent } from "../two-column-display/two-column-display.component"

@Component({
  selector: "app-projects-section",
  standalone: true,
  imports: [CommonModule, TwoColumnDisplayComponent],
  templateUrl: "./projects-section.component.html",
  styleUrls: ["./projects-section.component.scss"],
})
export class ProjectsSectionComponent {}
