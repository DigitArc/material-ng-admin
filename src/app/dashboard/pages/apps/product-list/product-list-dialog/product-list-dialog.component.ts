import { Component, OnInit, Inject, Optional } from "@angular/core";
import { TicketElement } from "../product-list.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-product-list-dialog",
  templateUrl: "./product-list-dialog.component.html",
  styleUrls: ["./product-list-dialog.component.scss"]
})
export class ProductListDialogComponent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<ProductListDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TicketElement
  ) {
    this.local_data = { ...data };
    this.action = this.local_data.action;
  }
  doAction() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
  closeDialog() {
    this.dialogRef.close({ event: "Cancel" });
  }
}
