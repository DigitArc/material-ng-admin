import { Component, OnInit, ViewChild, HostListener } from "@angular/core";
import { trigger, style, transition, animate } from "@angular/animations";
import { MENU_ITEMS, RouteNode } from "../shared/menu-items";

// ANGULAR MATERIAL
import { MatSidenav } from "@angular/material/sidenav";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [
    trigger("menuItemsAnimation", [
      transition(":enter", [
        style({ height: 0, opacity: 0 }),
        animate("500ms ease-in", style({ height: "*", opacity: 1 }))
      ]),
      transition(":leave", [
        animate("500ms", style({ height: "0", opacity: 0 }))
      ])
    ])
  ]
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatSidenav, { static: true }) matSidenav: MatSidenav;
  treeControl = new NestedTreeControl<RouteNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<RouteNode>();
  profileMenuOpened: boolean;

  @HostListener("window:resize", ["$event"]) handleScroll(e) {
    if (window.innerWidth > 500) {
      this.matSidenav.mode = "side";
    } else {
      this.matSidenav.mode = "over";
    }
  }

  constructor(private route: ActivatedRoute) {
    this.dataSource.data = MENU_ITEMS;
  }

  toggleProfileMenu() {
    this.profileMenuOpened = !this.profileMenuOpened;
  }

  hasChild = (_: number, node: RouteNode) =>
    !!node.children && node.children.length > 0;

  ngOnInit() {
    if (window.innerWidth > 500) {
      this.matSidenav.open().then(res => res);
      this.matSidenav.mode = "side";
    } else {
      this.matSidenav.close().then(res => res);
      this.matSidenav.mode = "over";
    }

    console.log(this.route.pathFromRoot);
  }
}
