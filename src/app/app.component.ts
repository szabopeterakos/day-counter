import { Component } from "@angular/core";
import { version } from "../../package.json";
// to avoid @ ts-ignore then instead of tsconfig.app.json add the lines to the tsconfig.json
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#new---resolvejsonmodule


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
  version = version;

  constructor() {
    console.log(`version: ${version}`)
    var duration = moment.duration(this.endDate.diff(moment()));
    this.hours = duration.asHours();
    this.minutes = duration.asMinutes().toFixed(0);
    this.weeks = duration.asWeeks().toFixed(3);
    this.years = duration.asYears().toFixed(3);
    this.counterValue = this.endDate.fromNow();
    this.more = moment();
  }
}
