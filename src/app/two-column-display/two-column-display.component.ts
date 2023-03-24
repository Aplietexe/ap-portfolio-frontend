import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component, Input } from "@angular/core"

import { DisplayItemComponent } from "./display-item/display-item.component"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-two-column-display",
  standalone: true,
  imports: [CommonModule, DisplayItemComponent],
  templateUrl: "./two-column-display.component.html",
  styleUrls: ["./two-column-display.component.scss"],
})
export class TwoColumnDisplayComponent {
  @Input() sectionTitle = ""

  @Input() items:
    | {
        image: string
        title: string
        subtitle: string
        description: string
      }[]
    | undefined
}
