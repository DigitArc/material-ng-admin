import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { EditorComponent } from "./editor/editor.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { FormFieldComponent } from "./form-field/form-field.component";
import { FormLayoutComponent } from "./form-layout/form-layout.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { InputsComponent } from "./inputs/inputs.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { RadiobuttonComponent } from "./radiobutton/radiobutton.component";
import { SelectComponent } from "./select/select.component";
import { SortHeaderComponent } from "./sort-header/sort-header.component";
import { TreeComponent } from "./tree/tree.component";
import { WizardComponent } from "./wizard/wizard.component";

const routes: Routes = [
  {
    path: "autocomplete",
    component: AutocompleteComponent
  },
  {
    path: "checkbox",
    component: CheckboxComponent
  },
  {
    path: "datepicker",
    component: DatepickerComponent
  },
  {
    path: "editor",
    component: EditorComponent
  },
  {
    path: "fileupload",
    component: FileUploadComponent
  },
  {
    path: "formfield",
    component: FormFieldComponent
  },
  {
    path: "formlayout",
    component: FormLayoutComponent
  },
  {
    path: "formvalidation",
    component: FormValidationComponent
  },
  {
    path: "inputs",
    component: InputsComponent
  },
  {
    path: "paginator",
    component: PaginatorComponent
  },
  {
    path: "radiobutton",
    component: RadiobuttonComponent
  },
  {
    path: "autocomplete",
    component: SelectComponent
  },
  {
    path: "sortheader",
    component: SortHeaderComponent
  },
  {
    path: "tree",
    component: TreeComponent
  },
  {
    path: "wizard",
    component: WizardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
