import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"

import { TwoColumnDisplayComponent } from "../two-column-display/two-column-display.component"

@Component({
  selector: "app-experience-section",
  standalone: true,
  imports: [CommonModule, TwoColumnDisplayComponent],
  templateUrl: "./experience-section.component.html",
  styleUrls: ["./experience-section.component.scss"],
})
export class ExperienceSectionComponent {
  experiences = [
    {
      image:
        "https://media.licdn.com/dms/image/C4D0BAQHJ8T4EUDhVTQ/company-logo_200_200/0/1657893487276?e=1686182400&v=beta&t=v5Idy0sQFi-bP__zkEXLlCi5bhNclgn0p8Mvf0cIhAQ",

      title: "Backend developer",
      subtitle: "No Country",

      description:
        "During this emulation, I worked in a cross-functional team, following Agile methodologies. Working along with more and less experienced developers, we built a services platform with real-time communication. While I started as a backend developer, I also worked as in our frontend in the second half of the project in order to implement more complex features and meet deadlines.",
    },
    {
      image:
        "https://media.licdn.com/dms/image/C560BAQEJe-MEhPTm7w/company-logo_200_200/0/1519897752927?e=1686182400&v=beta&t=T7gdb-bLWmX0TqmhyvsaEKxpIW1RL2yNirpCYhxGYO4",

      title: "Freelance developer",
      subtitle: "Freelancer.com",

      description:
        "During this year, I worked on projects for clients from North America, Europe, India, LATAM and the Middle East. The projects were varied in nature, from bug fixing and upgrading existing projects to creating APIs and full-stack MERN websites from scratch. I worked with technologies and tools such as React.js, Next.js, TypeScript, Python, Git, GitHub, React Router, Express, Node.js, MongoDB, Bootstrap, Twitter and Google Maps APIs.",
    },
  ]
}
