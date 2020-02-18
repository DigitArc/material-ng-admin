import { Component, OnInit, Optional, Inject } from "@angular/core";
import { ContactData } from "../contact.component";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-contact-content-dialog",
  templateUrl: "./contact-content-dialog.component.html",
  styleUrls: ["./contact-content-dialog.component.scss"]
})
export class ContactContentDialogComponent {
  action: string;
  local_data: any;

  constructor(
    public dialogRef: MatDialogRef<ContactContentDialogComponent>, //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ContactData
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
