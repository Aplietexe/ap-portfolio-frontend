import { CommonModule, NgOptimizedImage } from "@angular/common"
import { ChangeDetectionStrategy, Component, Input } from "@angular/core"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-two-column-display",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
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
