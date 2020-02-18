import { Component, OnInit, AfterViewInit } from "@angular/core";
import * as c3 from "c3";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit() {
    const chart = c3.generate({
      bindto: "#visitor",
      data: {
        columns: [
          ["Open", 4],
          ["Closed", 2],
          ["In progress", 2],
          ["Other", 0]
        ],
        type: "donut"
      },
      donut: {
        label: {
          show: false
        },
        title: "Tickets",
        width: 35
      },
      legend: {
        hide: true
      },
      color: {
        pattern: ["#40c4ff", "#2961ff", "#ff821c", "#7e74fb"]
      }
    });
  }
}
