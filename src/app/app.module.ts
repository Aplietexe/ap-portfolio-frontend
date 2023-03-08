import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from "./app.component"
import { ExperienceSectionComponent } from "./experience-section/experience-section.component"
import { NavbarComponent } from "./navbar/navbar.component"
import { ProfileInfoComponent } from "./profile-info/profile-info.component"

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarComponent,
    ProfileInfoComponent,
    ExperienceSectionComponent,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
