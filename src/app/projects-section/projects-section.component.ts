import { CommonModule } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"

import { TwoColumnDisplayComponent } from "../two-column-display/two-column-display.component"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-projects-section",
  standalone: true,
  imports: [CommonModule, TwoColumnDisplayComponent],
  templateUrl: "./projects-section.component.html",
  styleUrls: ["./projects-section.component.scss"],
})
export class ProjectsSectionComponent {
  projects = [
    {
      image:
        "https://yt3.googleusercontent.com/4HM_-p_YCTbyHFdDKLOd2DPr8QvHePQcq9v4404vHP4ojUD5H9h0Cj8MYY0EAgFWxKocR2bGgQc=s900-c-k-c0x00ffffff-no-rj",

      title: "Argentina Programa Portfolio",
      subtitle: "2023",

      description:
        "This portfolio, created using TypeScript with Angular and Java with Spring Boot.",
    },
    {
      image:
        "https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo.png",

      title:
        "<a href='https://github.com/Aplietexe/udemy-autocoupons'>Udemy Autocoupons</a>",

      subtitle: "2023",

      description:
        "An automatic scrapper and enroller for Udemy courses. Created using Python, aiohttp, BeautifulSoup and Selenium.",
    },
    {
      image:
        "https://carruso-client.vercel.app/static/media/carruso-logo.3df6da0cf72a96f99d52.webp",

      title: "<a href='https://carruso-client.vercel.app'>Carruso website</a>",
      subtitle: "2022",

      description:
        "A website for a car dealer. Created using the MERN stack with TypeScript and Bootstrap.",
    },
    {
      image:
        "https://boxcustodia-sello-competencia.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsello-competencia-logo.523a0172.png&w=1080&q=75",

      title:
        "<a href='https://boxcustodia-sello-competencia.vercel.app'>Sello Competencia</a>",

      subtitle: "2022",

      description: "A website created for Box Custodia with Next.js.",
    },
    {
      image:
        "https://boxcustodia-workflow-next.vercel.app/_next/static/media/workflow-logo.c5f49b61.svg",

      title:
        "<a href='https://boxcustodia-workflow-next.vercel.app'>Workflow</a>",

      subtitle: "2022",

      description: "A website created for Box Custodia with Next.js.",
    },
    {
      image:
        "https://www.sky.com/contentstack/assets/bltcaeb0983267f4b43/blt72af66949d92f3bd/61d87b158aabbf6426b751aa/download",

      title:
        "<a href='https://aplietexe.github.io/ticket-ballot-winner-email-temp/'>Ticket Winner Email Template</a>",

      subtitle: "2022",

      description:
        "An email template created for the winner of a ticket for Sky VIP.",
    },
  ]
}
