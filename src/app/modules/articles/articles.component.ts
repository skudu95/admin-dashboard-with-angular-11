import { Component, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ArticlesService } from '../articles.service';
import { NgModuleResolver } from '@angular/compiler';
import { Employee } from './employee';
import { threadId } from 'worker_threads';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/shared/confirmation-dialog.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  // added 
  // encapsulation: ViewEncapsulation.None,
})
export class ArticlesComponent implements OnInit {

  //  need some proper input
  // @Input() value: number | undefined;
  // @Input() total: number | undefined;

  //  trying to get a new one
  // progresValue: number;
  // rangeArray: number[];


  dataSource: MatTableDataSource<Employee>;
  // undefined added!!!!!!.....!!!!
  articles: Employee[];


  columns: string[] = ['id', 'name', 'email', 'phoneNumber', 'actions'];


  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private articlesService: ArticlesService,
    private router: Router,
    private confirmationDialogService: ConfirmationDialogService) {

    // trying to get a new one
    // this.progresValue = 20;
    // this.rangeArray = new Array(100);
  }

  ngOnInit(): void {

    //if we don't have progress, set it to 0.
    //   if (!this.value) {
    //     this.value = 0;
    //   }
    //   //if we don't have a total aka no requirement, it's 100%.
    //   if (this.total === 0) {
    //     this.total = this.value;
    //   } else if (!this.total) {
    //     this.total = 100;
    //   }
    //   //if the progress is greater than the total, it's also 100%.
    //   if (this.value > this.total) {
    //     this.value = 100;
    //     this.total = 100;
    //   }
    //   this.value = (this.value / this.total) * 100

    this.articlesService.getArticlesList().then(response => {
      this.articles = response.data;

      this.dataSource = new MatTableDataSource(this.articles);

      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }

  private getEmployees() {
    this.articlesService.getArticlesList().then(response => {
      this.articles = response.data;
      this.dataSource = new MatTableDataSource(this.articles);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  deleteEmployee(id: number) {
    // this.articlesService.deleteEmployees(id).then(response => {
    //   this.articles = response.data;

    //   console.log(response.data);

    //   this.getEmployees();

    this.confirmationDialogService.openConfirmationDialog("Proceed to Delete ?")
      .afterClosed().subscribe(response => {
        console.log(response);
        if (response) {
          this.articlesService.deleteEmployees(id).then(response => {
            this.articles = response.data;
            console.log(response.data);

            this.getEmployees();
          })
        }
      });
  }

  applyFilter(event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim();
    // excluded .toLowerCase()
  }

  editEmployee(id: number) {
    // this.router.navigate(['edit', id]);
    this.router.navigate(['articles/employee-edit', id])
  }


  btnClick = function () {
    this.router.navigate(['/articles/employee-add']);
  }

}
