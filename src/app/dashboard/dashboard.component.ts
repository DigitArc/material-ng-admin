import { Component, OnInit, ViewChild, HostListener } from "@angular/core";

// ANGULAR MATERIAL
import { MatSidenav } from "@angular/material/sidenav";
import { MatTreeNestedDataSource } from "@angular/material/tree";
import { NestedTreeControl } from "@angular/cdk/tree";

import { trigger, style, transition, animate } from "@angular/animations";

interface RouteNode {
  name: string;
  icon?: string;
  route?: string;
  children?: RouteNode[];
}

const TREE_DATA: RouteNode[] = [
  {
    name: "Dashboards",
    icon: "apps",
    children: [
      { name: "Dashboard 1", route: "/dashboard/home" },
      { name: "Dashboard 2", route: "/dashboard/home" },
      { name: "Dashboard 3", route: "/dashboard/home" }
    ]
  },
  {
    name: "Forms",
    icon: "format_align_center",
    children: [
      { name: "Text Inputs", route: "/dashboard/home" },
      { name: "Date Picker", route: "/dashboard/home" },
      { name: "Select", route: "/dashboard/home" }
    ]
  },
  {
    name: "Widgets",
    icon: "assessment"
  }
];

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

  constructor() {
    this.dataSource.data = TREE_DATA;
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
  }
}
