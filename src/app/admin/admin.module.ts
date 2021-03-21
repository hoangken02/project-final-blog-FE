import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {CategoryListComponent} from './category/categoryl-list/category-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {CategoryCreateComponent} from './category/category-create/category-create.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {CategoryUpdateComponent} from './category/category-update/category-update.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavBarModule} from '../shared/navbar';
import {FooterModule} from '../shared/footer';
import {NgxAudioPlayerModule} from '../../../projects/ngx-audio-player/src/lib/ngx-audio-player.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UserCreateComponent} from './user/user-create/user-create.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'categories/create',
    component: CategoryCreateComponent
  },
  {
    path: 'categories/:id',
    component: CategoryUpdateComponent
  },
  {
    path: 'users',
    component: UserListComponent
  },
  {
    path: 'users/create',
    component: UserCreateComponent
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    CategoryUpdateComponent,
    CategoryCreateComponent,
    CategoryListComponent,
    UserListComponent,
    UserCreateComponent
  ],
  imports: [
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
    MatListModule,
  ]
})
export class AdminModule {
}
