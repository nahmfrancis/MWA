import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserdetailsComponent } from './userdetails.component';
import { UsersComponent } from './users.component';
import { UsersGuard } from '../users.guard';


@NgModule({
  declarations: [UserdetailsComponent, UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([

      { path: '', component: UsersComponent } ,
      { path: 'users/:id', component: UserdetailsComponent, canActivate: [UsersGuard] }

    ])
  ]
})
export class UsersModule { }
