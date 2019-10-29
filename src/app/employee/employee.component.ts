import { Component, OnInit,Input } from '@angular/core';
import { EmpServiceService } from '../services/emp-service.service';
import { EmployeeModel } from '../models/employee-model';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees : EmployeeModel[];
  employee = new EmployeeModel();
  addEmployee = new EmployeeModel();
  
  constructor(private ObjEmpService : EmpServiceService) { }

  ngOnInit() {
    //this.service_getAllEmployees();
    this.service_getEmployeeByEmpId();
  }

  service_getAllEmployees(){
    this.ObjEmpService.getAllEmployeeData().subscribe(data => {
      console.log("This is the return data of get request");
      //console.log(data);
      (data != null) ? this.employees = data : console.log("empty get request initiated");        
      console.table(this.employees);  
    },error => {
      console.log(error);
    }          
    );
  }

  service_getEmployeeByEmpId(){    
    let empid = 8447;
    this.ObjEmpService.getEmployeeByEmpId(empid).subscribe(data => {
      //console.log("This is the return data of get request by empid");
      //console.log(data);
      console.log("This is emp instance data");
      this.employee = data;
      console.log(this.employee);                        
      //console.table(this.employee);  
    },error => {
      console.log(error);
    }          
    );
  }

  AddEmployee(){
    console.log("employee to be added");
    console.log(this.addEmployee);

    this.ObjEmpService.AddEmployee(this.addEmployee).subscribe( data => {
      (data!=null) ? console.log(data) : console.log("returned empty");
      },error => {
        console.log(error);
      }                    
    );
  }

}
