import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "compose-mail-dialog",
  template: `
    <h3 class="m-t-0">Compose Email</h3>
    <form class="basic-form">
      <div fxLayout="row" fxLayoutWrap="wrap">
        <!-- column -->
        <div fxFlex.gt-sm="50" fxFlex="50">
          <mat-form-field>
            <input matInput placeholder="To" type="email" />
          </mat-form-field>
        </div>
        <!-- column -->
        <div fxFlex.gt-sm="50" fxFlex="50">
          <mat-form-field>
            <input matInput placeholder="Subject" type="text" />
          </mat-form-field>
        </div>
      </div>
      <div fxLayout="row" fxLayoutWrap="wrap">
        <!-- column -->
        <div fxFlex.gt-sm="100" fxFlex="100">
          <quill-editor [style]="{ height: '200px' }"></quill-editor>
        </div>
      </div>
      <div fxLayout="row" fxLayoutWrap="wrap">
        <!-- column -->
        <div fxFlex.gt-sm="100" fxFlex="100" class="mini-spacer">
          <button mat-raised-button color="primary">Send</button>
          <button mat-raised-button color="accent" class="m-l-30">
            Save as a Draft
          </button>
        </div>
      </div>
    </form>
  `
})
export class ComposeMailDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
