import { Component } from "@angular/core";
import { version } from "../../../package.json";
// to avoid @ ts-ignore then instead of add the lines just to the tsconfig.app.json add tsconfig.json too.
// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#new---resolvejsonmodule

@Component({
  selector: "app-version",
  templateUrl: "./v.component.html",
})
export class VersionComponent {
  version = version;
}
