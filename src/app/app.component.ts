import { Component } from "@angular/core";

import moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "day-counter";
  counterValue_ = moment().startOf("month");
  counterValue__ = moment().to(moment("20210315"));
  counterValue = moment("20210315").fromNow();
}
