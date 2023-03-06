import { CommonModule, NgOptimizedImage } from "@angular/common"
import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "app-profile-info",
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./profile-info.component.html",
  styleUrls: ["./profile-info.component.scss"],
})
export class ProfileInfoComponent {
  headerUrl = "https://source.unsplash.com/random/1920x1080"

  avatarUrl = "https://source.unsplash.com/random/200x200"

  name = "Pietro Palombini"

  title = "Fullstack Developer - TypeScript - Next - MERN | CS Student"

  about = `I started coding at th1e age of 13, driven by my love for math, computers, and problem-solving. For years, I only worked on my personal projects, seeking to automate frequent actions, improve school projects, solve problems for friends and relatives and try out stuff for fun.

Eventually, I decided to acquire a better education and started taking online courses. When I decided I was ready to commit to projects with clients, I started working as a freelance developer to gain real-world experience, work with other people, and improve my communication skills. 

As of 2023, I am pursuing degrees in Computer Science and Applied Mathematics, and have experience working as a Software Engineer with JavaScript/TypeScript, the MERN stack, Next.js, and other libraries for frontend, backend and fullstack development such as react-router, Bootstrap, Selenium, and styled-components, among others. On the non-web side, I have experience with Python, aiohttp, and beautifulsoup. I am knowledgeable and use Bash and SQL on an almost daily basis. 

I care a great deal about efficiency in my personal, academic, and professional life, which is why my interests include improving my daily productivity, personal finance, learning Dvorak, and Personal Knowledge Management systems. 

In addition to pursuing degrees in CS and AM, I am learning German, LaTeX, data science, and machine learning, as well as looking to broaden my knowledge of web technologies and stay current with the latest developments in web development.`
}
