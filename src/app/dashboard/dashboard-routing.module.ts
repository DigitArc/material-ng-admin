import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/dashboard/home"
  },
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./pages/home/home.module").then(m => m.HomeModule)
      },
      {
        path: "material-ui",
        loadChildren: () =>
          import("./pages/material-ui/material-ui.module").then(
            m => m.MaterialUiModule
          )
      },
      {
        path: "reservation",
        loadChildren: () =>
          import("./pages/reservation/reservation.module").then(
            m => m.ReservationModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
