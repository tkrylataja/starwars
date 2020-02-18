import { Component } from "@angular/core";

@Component({
    selector: "sw-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    title = "This is my first app";
    isTitleExist = this.title !== "" ? true : false;
}
