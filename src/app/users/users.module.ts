import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    RouterModule,
    MatCardModule
  ],
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    DeleteUserComponent,
    EditUserComponent,
    ViewUserComponent,
  ],
  exports:[
    AddUserComponent,
    ListUsersComponent,
    DeleteUserComponent,
    EditUserComponent,
    ViewUserComponent
  ]
})
export class UsersModule { }
