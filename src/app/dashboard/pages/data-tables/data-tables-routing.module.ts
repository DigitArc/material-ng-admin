import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicDataTableComponent } from "./basic-data-table/basic-data-table.component";
import { EditingComponent } from "./editing/editing.component";
import { FilterableComponent } from "./filterable/filterable.component";
import { MaterialTableComponent } from "./material-table/material-table.component";

const routes: Routes = [
  {
    path: "basictable",
    component: BasicDataTableComponent
  },
  {
    path: "editing",
    component: EditingComponent
  },
  {
    path: "filterable",
    component: FilterableComponent
  },
  {
    path: "materialtable",
    component: MaterialTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataTablesRoutingModule {}
