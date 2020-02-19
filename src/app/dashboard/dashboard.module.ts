// CORE ANGULAR
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

// ROUTING
import { DashboardRoutingModule } from "./dashboard-routing.module";

// CORE COMPONENT
import { DashboardComponent } from "./dashboard.component";

// DASHBOARD CUSTOM COMPONENTS"
import { HeaderComponent } from "./components/header/header.component";

// ANGULAR MATERIAL
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatTreeModule } from "@angular/material/tree";
import { MatRippleModule } from "@angular/material/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";

import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { SpinnerComponent } from "../shared/spinner.component";
import { DemoMaterialModule } from "../demo-material-module";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true
};

@NgModule({
  declarations: [DashboardComponent, HeaderComponent, SpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,

    // ANGULAR MATERIAL
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTreeModule,
    MatRippleModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    PerfectScrollbarModule,
    DemoMaterialModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule {}
