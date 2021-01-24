import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/modules/articles.service';
import { Employee } from 'src/app/modules/articles/employee';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private articlesService: ArticlesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee() {
    this.articlesService.createEmployees(this.employee).then(response => {
      this.employee = response.data;
      this.goToEmployeesList();
    });
  }


  goToEmployeesList(){
    this.router.navigate(['/articles']);
  }

  register() {
    this.saveEmployee();
  }
}
