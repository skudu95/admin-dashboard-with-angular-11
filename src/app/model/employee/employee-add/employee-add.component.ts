import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticlesService} from 'src/app/modules/articles.service';
import {Employee} from 'src/app/modules/articles/employee';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit {

  //3rd way..using reactive form with
  myForm: FormGroup;

  employee: Employee = new Employee();

  constructor(private articlesService: ArticlesService,
              private router: Router,
              public fb: FormBuilder) {
  }

  ngOnInit(): void {

    //  3rd
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['']
    });
  }

  // need to work on it!
  register() {
    this.saveForm();
    console.log(this.myForm);
  }

  public errorHandling = (control: string, error: string) => {
    return this.myForm.controls[control].hasError(error);
  }

  //
  saveForm() {
    this.articlesService.createForm(this.myForm.value).then(response => {
      console.log(response);
      this.goToEmployeesList();
    });
  }

  goToEmployeesList() {
    this.router.navigate(['/articles']);
  }

  /*
    saveEmployee() {
      this.articlesService.createEmployees(this.employee).then(response => {
        this.employee = response.data;
        this.goToEmployeesList();
      });
    }


    goToEmployeesList() {
      this.router.navigate(['/articles']);
    }

      register() {
        this.saveEmployee();
      }
       */


  // angular material validation
  // getErrorMessage() {
  //   if (this.employee.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //
  //   return this.employee.email.hasError('email') ? 'Not a valid email' : '';
  // }


}
