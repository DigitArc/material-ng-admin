import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicTableComponent } from "./basic-table/basic-table.component";
import { FilterableTableComponent } from "./filterable-table/filterable-table.component";
import { MixTableComponent } from "./mix-table/mix-table.component";
import { PaginationTableComponent } from "./pagination-table/pagination-table.component";
import { SortableTableComponent } from "./sortable-table/sortable-table.component";

const routes: Routes = [
  {
    path: "basictable",
    component: BasicTableComponent
  },
  {
    path: "filterabletable",
    component: FilterableTableComponent
  },
  {
    path: "mixtable",
    component: MixTableComponent
  },
  {
    path: "paginationtable",
    component: PaginationTableComponent
  },
  {
    path: "sortabletable",
    component: SortableTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
