import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MailsComponent } from './show-email/mails.component';
import { AddMailComponent } from './add-mail/add-mail.component';
import { UpdateMailComponent } from './update-mail/update-mail.component';
import { DeleteMailComponent } from './delete-mail/delete-mail.component';

const routes: Routes = [
  { path: '', component: MailsComponent },
  { path: 'add', component: AddMailComponent },
  { path: 'delete', component: DeleteMailComponent },
  { path: 'update', component: UpdateMailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailsRoutingModule { }
