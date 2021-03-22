import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';

import {faFacebookF} from '@fortawesome/free-brands-svg-icons/faFacebookF';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxAudioPlayerModule} from 'projects/ngx-audio-player/src/public_api';
import {MatButtonModule} from '@angular/material/button';
import {NavBarModule} from './shared/navbar';
import {FooterModule} from './shared/footer';
import {MatDividerModule} from '@angular/material/divider';
import {LoginComponent} from './pages/login/login.component';
import {MainNavComponent} from './main-nav/main-nav.component';
import {TexteditorComponent} from './texteditor/texteditor.component';
import {CategoryListComponent} from './admin/category/categoryl-list/category-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {CategoryCreateComponent} from './admin/category/category-create/category-create.component';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {CategoryUpdateComponent} from './admin/category/category-update/category-update.component';
import {UserListComponent} from './admin/user/user-list/user-list.component';
import {MatSortModule} from '@angular/material/sort';
import {UserCreateComponent} from './admin/user/user-create/user-create.component';
import {AdminModule} from './admin/admin.module';
import {CommonModule} from '@angular/common';
import {AdminComponent} from './admin/admin/admin.component';
import {JwtModule} from '@auth0/angular-jwt';
import {UserUpdateComponent} from './admin/user/user-update/user-update.component';
import {UserModule} from './user/user.module';

export const appRoutes: Routes = [
  {
    path: '', component: HomeComponent, data: {title: 'Home'}
  },
  // {
  //   path: 'admin', component: AdminComponent,
  //   loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule)
  // },
  // {
  //   path: 'create', component: CategoryCreateComponent,
  //   // loadChildren: () => import('./category/category.module').then(module => module.AdminModule)
  // },
  // {
  //   path: 'categories/:id', component: CategoryUpdateComponent,
  //   // loadChildren: () => import('./category/category.module').then(module => module.AdminModule)
  // },
  // {
  //   path: 'users', component: UserListComponent
  // },
  // {
  //   path: 'users/create', component: UserCreateComponent,
  // },

];

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, TexteditorComponent, MainNavComponent, UserUpdateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    FontAwesomeModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    BrowserAnimationsModule,
    NavBarModule, FooterModule,
    NgxAudioPlayerModule,
    AdminModule,
    UserModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem('access_token');
        },
        // @ts-ignore
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['http://localhost:8080/login']
      }
    }),
    RouterModule.forRoot(appRoutes, {useHash: false}), MatDividerModule, MatTableModule, MatPaginatorModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faFacebookF, faTwitter, faLinkedinIn);
  }
}
