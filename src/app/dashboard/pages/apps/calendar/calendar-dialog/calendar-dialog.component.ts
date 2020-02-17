import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-calendar-dialog",
  template: `
    <h4 class="m-t-0">Event action occurred</h4>
    <div>
      Action:
      <pre>{{ data?.action }}</pre>
    </div>
    <br />
    <div>
      Event:
      <pre>{{ data?.event | json }}</pre>
    </div>
    <br />
    <button mat-raised-button color="primary" (click)="dialogRef.close()">
      Close dialog
    </button>
  `
})
export class CalendarDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CalendarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
