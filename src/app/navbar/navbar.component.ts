import { CommonModule, NgOptimizedImage } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"
import { MatButtonModule } from "@angular/material/button"
import { MatToolbarModule } from "@angular/material/toolbar"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, MatToolbarModule, NgOptimizedImage, MatButtonModule],
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {}
