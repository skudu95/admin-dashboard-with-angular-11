import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/modules/articles.service';
import { Employee } from 'src/app/modules/articles/employee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  id: number;
  employee: Employee = new Employee();

  constructor(private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.articlesService.getEmployeesById(this.id).then(response => {
      this.employee = response.data;
    });
  }

  goToEmployeesList() {
    this.router.navigate(['/articles']);
  }

  updateEmployee(){
    this.articlesService.updateEmployee(this.id, this.employee).then(response => {
      this.goToEmployeesList();
    });
  }

}
