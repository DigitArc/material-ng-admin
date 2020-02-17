import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CalendarComponent } from "./calendar/calendar.component";
import { ChatComponent } from "./chat/chat.component";
import { ContactComponent } from "./contact/contact.component";
import { TaskboardComponent } from "./taskboard/taskboard.component";
import { MailboxComponent } from "./mailbox/mailbox.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductListComponent } from "./product-list/product-list.component";

const routes: Routes = [
  {
    path: "calendar",
    component: CalendarComponent
  },
  {
    path: "chat",
    component: ChatComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "mailbox",
    component: MailboxComponent
  },
  {
    path: "product-details",
    component: ProductDetailsComponent
  },
  {
    path: "product-list",
    component: ProductListComponent
  },
  {
    path: "taskboard",
    component: TaskboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppsRoutingModule {}
