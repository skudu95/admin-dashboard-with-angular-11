import { Injectable } from '@angular/core';
import axios from 'axios';
import { Employee } from './articles/employee';

@Injectable({
  providedIn: 'root'
})


// TODO: re-check what's actually going on here 
const baseUrl = 'http://localhost:8020/api/v2/employees';

export class ArticlesService {

  constructor() { }


  // TODO: recheck the method... what's actually done here is that instead of doing getEmployees!
  getArticlesList() {
    return axios.get(baseUrl);
  }

  // TODO: re-verify this method since searching is not really in the html view!!!
  getEmployeesById(id: number) {
    return axios.get(baseUrl + '/' + id);
  }

  updateEmployee(id: number, employee: Employee){
    return axios.put(baseUrl + '/' + id, employee)
  }

  deleteEmployees(id: number) {
    return axios.delete(baseUrl + '/' + id);
  }

  // CHECK THE PARAM...!!!!
  createEmployees(employee: Employee) {
    return axios.post(baseUrl, employee)
  }
}
