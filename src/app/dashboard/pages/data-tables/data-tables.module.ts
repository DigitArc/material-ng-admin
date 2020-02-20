import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BasicDataTableComponent } from "./basic-data-table/basic-data-table.component";
import { FilterableComponent } from "./filterable/filterable.component";
import { EditingComponent } from "./editing/editing.component";
import { MaterialTableComponent } from "./material-table/material-table.component";
import { DataTablesRoutingModule } from "./data-tables-routing.module";
import { DemoMaterialModule } from "src/app/demo-material-module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    BasicDataTableComponent,
    FilterableComponent,
    EditingComponent,
    MaterialTableComponent
  ],
  imports: [
    CommonModule,
    DataTablesRoutingModule,
    MatInputModule,
    NgxDatatableModule,
    DemoMaterialModule
  ]
})
export class DataTablesModule {}
