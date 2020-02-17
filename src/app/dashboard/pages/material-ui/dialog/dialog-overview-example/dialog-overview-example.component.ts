import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-dialog-overview-example",
  templateUrl: "./dialog-overview-example.component.html",
  styleUrls: ["./dialog-overview-example.component.scss"]
})
export class DialogOverviewExampleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close();
  }
}
