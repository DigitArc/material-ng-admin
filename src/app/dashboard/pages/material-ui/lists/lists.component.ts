import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.scss"]
})
export class ListsComponent {
  typesOfShoes = ["Boots", "Clogs", "Loafers", "Moccasins", "Sneakers"];
  messages: any[] = [
    {
      from: "Berk Elmas",
      image: "assets/images/users/1.jpg",
      subject: "Material angular",
      content: "This is the material angular template"
    },
    {
      from: "John Doe",
      image: "assets/images/users/2.jpg",
      subject: "React Material",
      content: "We have Digitarc launched"
    },
    {
      from: "Emre Kara",
      image: "assets/images/users/3.jpg",
      subject: "Task list",
      content: "This is the latest task hasbeen done"
    }
  ];

  folders = [
    {
      name: "Photos",
      updated: new Date("1/1/16")
    },
    {
      name: "Recipes",
      updated: new Date("1/17/16")
    },
    {
      name: "Work",
      updated: new Date("1/28/16")
    }
  ];
  notes = [
    {
      name: "Vacation Itinerary",
      updated: new Date("2/20/16")
    },
    {
      name: "Kitchen Remodel",
      updated: new Date("1/18/16")
    }
  ];
}
