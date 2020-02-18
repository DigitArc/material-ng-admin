import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Message, MESSAGES } from "./mock-messages";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { ComposeMailDialogComponent } from "./compose-mail-dialog/compose-mail-dialog.component";

@Component({
  selector: "app-mailbox",
  templateUrl: "./mailbox.component.html",
  styleUrls: ["./mailbox.component.scss"]
})
export class MailboxComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: 960px)`);

  public config: PerfectScrollbarConfigInterface = {};

  displayMode = "default";

  messages: Message[];
  selectedMessage: Message;
  messageOpen = false;
  sidePanelOpened = true;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getMessages();
  }

  isOver(): boolean {
    return this.mediaMatcher.matches;
  }

  getMessages(): void {
    this.messages = MESSAGES;
    this.selectedMessage = this.messages[1];
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

  // Compose button
  openDialog() {
    const dialogRef = this.dialog.open(ComposeMailDialogComponent, {});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
