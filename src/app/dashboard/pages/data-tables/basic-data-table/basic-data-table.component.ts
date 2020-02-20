import { Component, ViewChild } from "@angular/core";
import { company as data } from "../../../../../assets/data/company-data";

@Component({
  selector: "app-basic-data-table",
  templateUrl: "./basic-data-table.component.html",
  styleUrls: ["./basic-data-table.component.scss"]
})
export class BasicDataTableComponent {
  editing = {};
  rows = [];
  temp = [...data];

  loadingIndicator = true;
  reorderable = true;

  columns = [{ prop: "name" }, { name: "Gender" }, { name: "Company" }];

  @ViewChild(BasicDataTableComponent, { static: true })
  table: BasicDataTableComponent;
  constructor() {
    this.rows = data;
    this.temp = [...data];
    setTimeout(() => {
      this.loadingIndicator = false;
    }, 1500);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();
  }
}
