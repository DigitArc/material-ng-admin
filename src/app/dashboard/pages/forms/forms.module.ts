import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsRoutingModule } from "./forms-routing.module";
import { FormLayoutComponent } from "./form-layout/form-layout.component";
import { AutocompleteComponent } from "./autocomplete/autocomplete.component";
import { CheckboxComponent } from "./checkbox/checkbox.component";
import { RadiobuttonComponent } from "./radiobutton/radiobutton.component";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { SelectComponent } from "./select/select.component";
import { FormFieldComponent } from "./form-field/form-field.component";
import { InputsComponent } from "./inputs/inputs.component";
import { TreeComponent } from "./tree/tree.component";
import { EditorComponent } from "./editor/editor.component";
import { FormValidationComponent } from "./form-validation/form-validation.component";
import { FileUploadComponent } from "./file-upload/file-upload.component";
import { WizardComponent } from "./wizard/wizard.component";
import { PaginatorComponent } from "./paginator/paginator.component";
import { SortHeaderComponent } from "./sort-header/sort-header.component";
import { DemoMaterialModule } from "src/app/demo-material-module";
import {
  ReactiveFormsModule,
  FormsModule as NgFormsModule
} from "@angular/forms";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { MatTreeModule } from "@angular/material/tree";
import { FileUploadModule } from "ng2-file-upload";
import { QuillModule } from "ngx-quill";

@NgModule({
  declarations: [
    FormLayoutComponent,
    AutocompleteComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    DatepickerComponent,
    SelectComponent,
    FormFieldComponent,
    InputsComponent,
    TreeComponent,
    EditorComponent,
    FormValidationComponent,
    FileUploadComponent,
    WizardComponent,
    PaginatorComponent,
    SortHeaderComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    NgFormsModule,
    NgMultiSelectDropDownModule,
    MatTreeModule,
    FileUploadModule,
    QuillModule.forRoot()
  ]
})
export class FormsModule {}
