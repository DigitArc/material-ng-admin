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

import { AppsRoutingModule } from "./apps-routing.module";
import {
  CalendarComponent,
  CalendarDialogComponent
} from "./calendar/calendar.component";
import { MailboxComponent } from "./mailbox/mailbox.component";
import { ChatComponent } from "./chat/chat.component";
import { TaskboardComponent } from "./taskboard/taskboard.component";
import { ContactComponent } from "./contact/contact.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    CalendarComponent,
    MailboxComponent,
    ChatComponent,
    TaskboardComponent,
    ContactComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AppsRoutingModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  entryComponents: [CalendarDialogComponent]
})
export class AppsModule {}
