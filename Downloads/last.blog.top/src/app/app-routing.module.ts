import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogFormComponent } from './blog/blog-form/blog-form.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';

const routes: Routes = [
  { path: 'blogs', component: BlogListComponent },
  { path: 'blogs/new', component: BlogFormComponent },
  { path: 'blogs/edit/:id', component: BlogFormComponent },
  { path: 'blogs/:id', component: BlogDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/blogs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
