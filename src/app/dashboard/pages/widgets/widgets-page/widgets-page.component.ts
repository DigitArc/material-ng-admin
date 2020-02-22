import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-widgets-page",
  templateUrl: "./widgets-page.component.html",
  styleUrls: ["./widgets-page.component.scss"]
})
export class WidgetsPageComponent implements OnInit {
  // Timeline
  mytimelines: any[] = [
    {
      from: "Charles Fang",
      time: "(5 minute ago)",
      image: "assets/images/users/1.jpg",
      attachment: "assets/images/big/img2.jpg",
      content:
        // tslint:disable-next-line:max-line-length
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper"
    },
    {
      from: "Wendy Keen",
      time: "(3 minute ago)",
      image: "assets/images/users/2.jpg",
      content:
        // tslint:disable-next-line:max-line-length
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper",
      buttons: "primary"
    },
    {
      from: "Marvin Turner",
      time: "(1 minute ago)",
      image: "assets/images/users/3.jpg",
      attachment: "assets/images/big/img1.jpg",
      content:
        // tslint:disable-next-line:max-line-length
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper"
    },
    {
      from: "John Doe",
      time: "(1 minute ago)",
      image: "assets/images/users/4.jpg",
      content:
        // tslint:disable-next-line:max-line-length
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper",
      buttons: "warn"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
