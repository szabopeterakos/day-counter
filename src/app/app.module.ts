import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { VersionComponent } from "./version/v.component";

const appRoutes: Routes = [
  {
    path: "version",
    component: VersionComponent,
  },
  {
    path: "v",
    redirectTo: "version",
  },
];
@NgModule({
  declarations: [AppComponent, VersionComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
