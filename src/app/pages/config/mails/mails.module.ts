import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailsRoutingModule } from './mails-routing.module';

// Components
import { MailsComponent } from './show-email/mails.component';
import { AddMailComponent } from './add-mail/add-mail.component';
import { UpdateMailComponent } from './update-mail/update-mail.component';
import { DeleteMailComponent } from './delete-mail/delete-mail.component';

@NgModule({
  declarations: [
    MailsComponent,
    AddMailComponent,
    UpdateMailComponent,
    DeleteMailComponent,
  ],
  exports: [
    MailsComponent,
  ],
  imports: [
    CommonModule,
    MailsRoutingModule
  ]
})
export class MailsModule { }
