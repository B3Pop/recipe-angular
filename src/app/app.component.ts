import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loadedSelection = "recipe";
  onNavigate(section: string) {
    this.loadedSelection = section;
  }
}
