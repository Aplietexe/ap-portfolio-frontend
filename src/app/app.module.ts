import { HttpClientModule } from "@angular/common/http"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from "./app.component"
import { authInterceptorProvider } from "./auth/auth.interceptor"
import { EducationSectionComponent } from "./education-section/education-section.component"
import { ExperienceSectionComponent } from "./experience-section/experience-section.component"
import { LanguagesSectionComponent } from "./languages-section/languages-section.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { ProfileInfoComponent } from "./profile-info/profile-info.component"
import { ProjectsSectionComponent } from "./projects-section/projects-section.component"
import { SkillsSectionComponent } from "./skills-section/skills-section.component"

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarComponent,
    ProfileInfoComponent,
    ExperienceSectionComponent,
    EducationSectionComponent,
    SkillsSectionComponent,
    ProjectsSectionComponent,
    LanguagesSectionComponent,
    HttpClientModule,
  ],

  providers: [authInterceptorProvider],

  bootstrap: [AppComponent],
})
export class AppModule {}
