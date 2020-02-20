import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicTableComponent } from "./basic-table/basic-table.component";
import { FilterableTableComponent } from "./filterable-table/filterable-table.component";
import { PaginationTableComponent } from "./pagination-table/pagination-table.component";
import { SortableTableComponent } from "./sortable-table/sortable-table.component";
import { MixTableComponent } from "./mix-table/mix-table.component";
import { TablesRoutingModule } from "./tables-routing.module";
import { DemoMaterialModule } from "../..//../demo-material-module";

@NgModule({
  declarations: [
    BasicTableComponent,
    FilterableTableComponent,
    PaginationTableComponent,
    SortableTableComponent,
    MixTableComponent
  ],
  imports: [CommonModule, TablesRoutingModule, DemoMaterialModule]
})
export class TablesModule {}
