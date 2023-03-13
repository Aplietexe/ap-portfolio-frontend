import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"

import { TwoColumnDisplayComponent } from "../two-column-display/two-column-display.component"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-education-section",
  standalone: true,
  imports: [CommonModule, TwoColumnDisplayComponent],
  templateUrl: "./education-section.component.html",
  styleUrls: ["./education-section.component.scss"],
})
export class EducationSectionComponent {
  education = [
    {
      image:
        "https://argentinaestudia.com/wp-content/uploads/2021/06/logo-UNC.jpg",

      title: "Bachelor of Computer Science",
      subtitle: "Universidad Nacional de Córdoba",

      description: "2023-2027",
    },
    {
      image:
        "https://argentinaestudia.com/wp-content/uploads/2021/06/logo-UNC.jpg",

      title: "Bachelor of Applied Mathematics",
      subtitle: "Universidad Nacional de Córdoba",

      description: "2023-2027",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSiM4gWurJLqSwSnjlIXiBZGcjYzU6SIubWVE9wMX8a0d9uSJ4ybx4GvWyb28Rw8iy6m0&usqp=CAU",

      title: "High School Diploma",
      subtitle: "Colegio Nacional de Monserrat",

      description: "2016-2022",
    },
  ]
}
