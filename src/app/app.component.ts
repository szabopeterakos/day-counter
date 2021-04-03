import { Component } from "@angular/core";

import moment from "moment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "day-counter";
  endDate = moment("20210409 00:00","YYYYMMDD HH:mm");
  counterValue;
  more;
  hours;
  minutes;
  weeks;
  years;

  constructor() {
    var duration = moment.duration(this.endDate.diff(moment()));
    this.hours = duration.asHours();
    this.minutes = duration.asMinutes().toFixed(0);
    this.weeks = duration.asWeeks().toFixed(3);
    this.years = duration.asYears().toFixed(3);
    this.counterValue = this.endDate.fromNow();
    this.more = moment();
  }
}
