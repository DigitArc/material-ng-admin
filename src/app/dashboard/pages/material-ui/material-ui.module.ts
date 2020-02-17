import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { GridListComponent } from "./grid-list/grid-list.component";
import { MenuComponent } from "./menu/menu.component";
import { TabsComponent } from "./tabs/tabs.component";
import { StepperComponent } from "./stepper/stepper.component";
import { RipplesComponent } from "./ripples/ripples.component";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { ChipsComponent } from "./chips/chips.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ProgressSpinnerComponent } from "./progress-spinner/progress-spinner.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { DialogComponent } from "./dialog/dialog.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { SliderComponent } from "./slider/slider.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { MaterialUiRoutingModule } from "./material-ui-routing.module";
import { ListsComponent } from "./lists/lists.component";
import { DemoMaterialModule } from "src/app/demo-material-module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { DialogOverviewExampleComponent } from "./dialog/dialog-overview-example/dialog-overview-example.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    BadgeComponent,
    ButtonsComponent,
    CardsComponent,
    GridListComponent,
    MenuComponent,
    TabsComponent,
    StepperComponent,
    RipplesComponent,
    ExpansionPanelComponent,
    ChipsComponent,
    ToolbarComponent,
    ProgressSpinnerComponent,
    ProgressBarComponent,
    DialogComponent,
    TooltipComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    ListsComponent,
    DialogOverviewExampleComponent
  ],
  imports: [
    CommonModule,
    MaterialUiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  entryComponents: [DialogOverviewExampleComponent]
})
export class MaterialUiModule {}
