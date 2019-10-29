import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { EmployeeModel } from '../models/employee-model';


@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private _http : HttpClient ) { }

  // "http://dummy.restapiexample.com/api/v1/employees" //-GET
  // "http://dummy.restapiexample.com/api/v1/employee"  //-GET  
  // "http://dummy.restapiexample.com/api/v1/create"    //-POST
  
  APIurl = "http://dummy.restapiexample.com/api/v1";
    
  getAllEmployeeData(){
    return this._http.get<any>(this.APIurl+"/employees");
  }
  getEmployeeByEmpId(employeeId){
  
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type':  'application/json'        
    //   })
    // };

    //return this._http.get<any>(this.url2 +"/"+employeeId ,httpOptions);
    return this._http.get<any>(this.APIurl +"/employee/"+employeeId);
  }

  AddEmployee(employeeData:EmployeeModel){
    let empObj = {
      "name" : employeeData.employee_name,
      "salary" : employeeData.employee_salary,
      "age" : employeeData.employee_age
    }
    return this._http.post<any>(this.APIurl+"/create",empObj);
  }

  UpdateEmployeeByEmpId(employeeId){
    // let empObj = {
    //   "name" : employeeData.employee_name,
    //   "salary" : employeeData.employee_salary,
    //   "age" : employeeData.employee_age
    // }
    
  }

}
