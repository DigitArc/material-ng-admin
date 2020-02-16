import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() clicked = new EventEmitter();
  @Output() toggleEndSidenav = new EventEmitter();
  @Input("sidenavState") sidenavState: boolean;

  username$: Observable<string>;

  constructor() {}

  ngOnInit() {}

  handleLogout() {}

  handleToggle() {
    this.clicked.emit(true);
  }
}
