import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoadingPageComponent } from "./loading-page/loading-page.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "dashboard",
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },

  // REDIRECTING
  {
    path: "",
    pathMatch: "full",
    component: LoadingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
