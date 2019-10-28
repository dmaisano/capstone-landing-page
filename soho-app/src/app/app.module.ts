import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

@NgModule({
  declarations: [AppComponent, LandingPageComponent],
  imports: [BrowserModule, AppRoutingModule, ScrollToModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
