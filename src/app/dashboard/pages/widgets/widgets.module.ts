import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WidgetsPageComponent } from "./widgets-page/widgets-page.component";
import { WidgetsRoutingModule } from "./widgets-routing.module";
import { DemoMaterialModule } from "../../../demo-material-module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [WidgetsPageComponent],
  imports: [
    CommonModule,
    WidgetsRoutingModule,
    DemoMaterialModule,
    FlexLayoutModule
  ]
})
export class WidgetsModule {}
