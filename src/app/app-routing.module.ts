import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { EmployeeAddComponent } from './model/employee/employee-add/employee-add.component';
import { EmployeeEditComponent } from './model/employee/employee-edit/employee-edit.component';
import { ArticlesComponent } from './modules/articles/articles.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }, {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'articles/employee-add',
    component: EmployeeAddComponent
  },
  {
    path: 'articles/employee-edit/:id',
    component: EmployeeEditComponent
  }]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
