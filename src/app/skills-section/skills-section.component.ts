import { CommonModule, NgOptimizedImage } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-skills-section",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.scss"],
})
export class SkillsSectionComponent {
  skills = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/1216/1216733.png",

      title: "HTML/CSS",
      subtitle: "",

      description:
        "I have worked with HTML5 and CSS3 for over four years, and I am deeply knowledgeable in both. I have worked with HTML and CSS in production applications as a freelancer, in No Country, and in personal projects. I have worked with Bootstrap, Tailwind, SASS, among others. I always strive to write semantic, clean, responsive and accessible HTML and CSS. I use tools such as Lighthouse to measure metrics, and Stylelint to ensure code quality.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",

      title: "Typescript",
      subtitle: "",

      description:
        "I have worked with Typescript for over two years, and I strongly prefer it over Javascript, due to improving maintainability and code quality. I have worked with Typescript in production applications as a freelancer, in No Country, and in personal projects.",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",

      title: "React",
      subtitle: "",

      description:
        "I am vastly knowledgeable in React and its ecosystem, having used it in production applications as a freelancer, in No Country, and in personal projects. I have worked with Redux Toolkit, React Router, React Query, Styled Components, React Hook Form, Socket.io and Jest, among others.",
    },
    {
      image:
        "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",

      title: "Next.js",
      subtitle: "",

      description:
        "I have worked with Next.js in production applications as a freelancer. I prefer it over plain React thanks to its built-in optimizations and SSR/SSG, which improve performance, user experience and SEO.",
    },
    {
      image:
        "https://dextratechnologies.com/wp-content/uploads/2019/04/angular-js-icon.png",

      title: "Angular",
      subtitle: "",

      description:
        "I have learned Angular during the Argentina Programa bootcamp, using it to create this portfolio. I got knowledgable with the latest features of the framework, such as Standalone Components.",
    },
    {
      image: "https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png",

      title: "Node.js",
      subtitle: "",

      description:
        "I have worked with Node.js in production applications as a freelancer, in No Country, and in personal projects. I have worked with Express creating RESTful APIs, Socket.io, Mongoose, and Jest, among others. I always look for ways to improve performance and security, without one compromising the other. For this, I use tools such as JSON Web Tokens, Helmet, bcrypt. To ensure scalability, I am knowledgable in architectural patterns such as Model-View-Controller, Domain-Driven Design and Clean Architecture.",
    },
    {
      image:
        "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/database-512.png",

      title: "Databases",
      subtitle: "",

      description:
        "I have worked with SQLite, MySQL and MongoDB, both directly and through ORMs/ODMs such as Mongoose and Prisma.",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",

      title: "Python",
      subtitle: "",

      description:
        "I have worked with Python as a freelancer and in personal projects. I have used it for web scraping, automation, and competitive programming. I am familiar with the Python standard library, and take advantage of its simplicity and readability to deliver better and more performant code, faster, for example taking advantage of its multithreading/multiprocessing capabilities. I have also used external libraries such as Selenium, BeautifulSoup, Discord.py and aiohttp, among others.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5968/5968282.png",

      title: "Java",
      subtitle: "",

      description:
        "I have learned Java during the Argentina Programa bootcamp, using it to create this portfolio, making use of Spring Boot.",
    },
    {
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/000/552/199/small/gears_006.jpg",

      title: "Tooling",
      subtitle: "",

      description:
        "I have worked with Git, GitHub, GitHub Actions, Linux servers, Bash scripts, Selenium, Postman for API testing, Swagger for documentation and pre-commit for git hooks, among others. I also use a variety of linters and formatters to ensure code quality, such as ESLint and Prettier for JS/TS, or flake8 and black for Python. I always search for new tools to improve my workflow and productivity.",
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/33/33308.png",

      title: "Soft skills",
      subtitle: "",

      description:
        "As a freelancer, clients have praised in their reviews my commitment to punctuality, professionalism, communication and ability to explain technical concepts to non-technical stakeholders. While working in no country, I have been praised for my ability to work in a team, transfer knowledge to less experienced developers, and my commitment to the project through an holistic approach.",
    },
  ]
}
