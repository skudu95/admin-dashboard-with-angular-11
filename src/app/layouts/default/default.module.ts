import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from '../../modules/posts/posts.component';
import { SharedModule } from '../../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { DashboardService } from '../../modules/dashboard.service';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ArticlesComponent } from 'src/app/modules/articles/articles.component';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostsService } from 'src/app/modules/posts.service';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ArticlesService } from 'src/app/modules/articles.service';
import { EmployeeAddComponent } from 'src/app/model/employee/employee-add/employee-add.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from 'src/app/model/employee/employee-edit/employee-edit.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    ArticlesComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatDividerModule,
    MatCardModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatSortModule,
    // try commenting MatCardContent
    // MatCardContent,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [
    DashboardService,
    PostsService,
    ArticlesService,
    EmployeeAddComponent,
    EmployeeEditComponent
  ]
})
export class DefaultModule { }
