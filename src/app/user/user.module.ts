import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from '../admin/category/categoryl-list/category-list.component';
import {CategoryCreateComponent} from '../admin/category/category-create/category-create.component';
import {CategoryUpdateComponent} from '../admin/category/category-update/category-update.component';
import {UserListComponent} from '../admin/user/user-list/user-list.component';
import {UserCreateComponent} from '../admin/user/user-create/user-create.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {NavBarModule} from '../shared/navbar';
import {FooterModule} from '../shared/footer';
import {NgxAudioPlayerModule} from '../../../projects/ngx-audio-player/src/lib/ngx-audio-player.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    RouterModule.forChild(routes),
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule, MatCardModule, MatIconModule, FormsModule,
  ]
})
export class UserModule { }
