import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-languages-section",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./languages-section.component.html",
  styleUrls: ["./languages-section.component.scss"],
})
export class LanguagesSectionComponent {
  languages = [
    {
      image:
        "https://allvectorlogo.com/img/2017/06/cambridge-english-language-assessment-logo.png",

      name: "English",

      level:
        "<a href='https://drive.google.com/file/d/1U8ll78mpEB8HO6EPNvWbJVSSrJ0KAqZ2/edit'>C2 Proficient</a>",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png",

      name: "Spanish",
      level: "Native",
    },
  ]
}
