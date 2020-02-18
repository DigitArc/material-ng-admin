import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DemoMaterialModule } from "src/app/demo-material-module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  CalendarModule,
  DateAdapter,
  CalendarDateFormatter
} from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { QuillModule } from "ngx-quill";

import { AppsRoutingModule } from "./apps-routing.module";
import { CalendarComponent } from "./calendar/calendar.component";
import { MailboxComponent } from "./mailbox/mailbox.component";
import { ChatComponent } from "./chat/chat.component";
import { TaskboardComponent } from "./taskboard/taskboard.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CalendarDialogComponent } from "./calendar/calendar-dialog/calendar-dialog.component";
import { ComposeMailDialogComponent } from "./mailbox/compose-mail-dialog/compose-mail-dialog.component";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

@NgModule({
  declarations: [
    CalendarComponent,
    MailboxComponent,
    ChatComponent,
    TaskboardComponent,
    ContactComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CalendarDialogComponent,
    ComposeMailDialogComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AppsRoutingModule,
    QuillModule.forRoot(),
    PerfectScrollbarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [CalendarDialogComponent, ComposeMailDialogComponent]
})
export class AppsModule {}
