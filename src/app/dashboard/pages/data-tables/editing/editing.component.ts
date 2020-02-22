import { Component, ViewChild } from "@angular/core";
import { company as data } from "../../../../../assets/data/company-data";

@Component({
  selector: "app-editing",
  templateUrl: "./editing.component.html",
  styleUrls: ["./editing.component.scss"]
})
export class EditingComponent {
  editing = {};
  rows = [];
  temp = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: "name" }, { name: "Gender" }, { name: "Company" }];

  @ViewChild(EditingComponent, { static: true }) table: any;
  constructor() {
    this.rows = data;
    this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // update the rows

    // Whenever the filter changes, always go back to the first page
    this.table = data;
  }
  updateValue(event, cell, rowIndex) {
    console.log("inline editing rowIndex", rowIndex);
    this.editing[rowIndex + "-" + cell] = false;
    this.rows[rowIndex][cell] = event.target.value;
    this.rows = [...this.rows];
    console.log("UPDATED!", this.rows[rowIndex][cell]);
  }
}
