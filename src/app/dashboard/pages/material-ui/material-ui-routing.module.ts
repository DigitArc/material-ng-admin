import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BadgeComponent } from "./badge/badge.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CardsComponent } from "./cards/cards.component";
import { ChipsComponent } from "./chips/chips.component";
import { DialogComponent } from "./dialog/dialog.component";
import { ExpansionPanelComponent } from "./expansion-panel/expansion-panel.component";
import { GridListComponent } from "./grid-list/grid-list.component";
import { MenuComponent } from "./menu/menu.component";
import { ProgressBarComponent } from "./progress-bar/progress-bar.component";
import { ProgressSpinnerComponent } from "./progress-spinner/progress-spinner.component";
import { RipplesComponent } from "./ripples/ripples.component";
import { SlideToggleComponent } from "./slide-toggle/slide-toggle.component";
import { SliderComponent } from "./slider/slider.component";
import { SnackbarComponent } from "./snackbar/snackbar.component";
import { StepperComponent } from "./stepper/stepper.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { ListsComponent } from "./lists/lists.component";

const routes: Routes = [
  {
    path: "badge",
    component: BadgeComponent
  },
  {
    path: "buttons",
    component: ButtonsComponent
  },
  {
    path: "cards",
    component: CardsComponent
  },
  {
    path: "chips",
    component: ChipsComponent
  },
  {
    path: "dialog",
    component: DialogComponent
  },
  {
    path: "expansion-panel",
    component: ExpansionPanelComponent
  },
  {
    path: "grid-list",
    component: GridListComponent
  },
  {
    path: "lists",
    component: ListsComponent
  },
  {
    path: "menu",
    component: MenuComponent
  },
  {
    path: "progress-bar",
    component: ProgressBarComponent
  },
  {
    path: "progress-spinner",
    component: ProgressSpinnerComponent
  },
  {
    path: "ripples",
    component: RipplesComponent
  },
  {
    path: "slide-toggle",
    component: SlideToggleComponent
  },
  {
    path: "slider",
    component: SliderComponent
  },
  {
    path: "snackbar",
    component: SnackbarComponent
  },
  {
    path: "stepper",
    component: StepperComponent
  },
  {
    path: "tabs",
    component: TabsComponent
  },
  {
    path: "toolbar",
    component: ToolbarComponent
  },
  {
    path: "tooltip",
    component: TooltipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialUiRoutingModule {}
