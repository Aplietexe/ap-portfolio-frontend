import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

import { DisplayItem } from "../display-item.model"

@Component({
  selector: "app-display-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./display-item.component.html",
  styleUrls: ["./display-item.component.scss"],
})
export class DisplayItemComponent {
  @Input() item?: DisplayItem
}
