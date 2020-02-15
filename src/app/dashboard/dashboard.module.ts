// CORE ANGULAR
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

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

@NgModule({
  declarations: [DashboardComponent, HeaderComponent],
  imports: [
    CommonModule,

    // ANGULAR MATERIAL
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTreeModule,
    MatRippleModule,
    FlexLayoutModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule {}
