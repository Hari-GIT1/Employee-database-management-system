import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  employees:any = [];
  key:string = "";
  value1:number = 0;
  value2:number = 0;
  key1:string ="";
  key2:string ="";
  public singleEmployee:any = [];

  constructor(private _employeeService:EmployeeService,private _router:Router){
    _employeeService.getEmployee().subscribe(
      (data:any)=>{
        this.employees =data
      },
      (err:any)=>{
        alert("INTERNAL SERVER ERROR")
      }
    )
  }

search(){
  this._employeeService.filteredEmployee(this.key).subscribe(
    (data:any)=>{
      this.employees =data
    },
    (err:any)=>{
      alert("INTERNAL SERVER ERROR")
    }
  )

}
show(){
  this._employeeService.pagination(this.value1,this.value2).subscribe(
    (data:any)=>{
      this.employees =data
    },
    (err:any)=>{
      alert("INTERNAL SERVER ERROR")
    }
  )
}
sort(){
  this._employeeService.sortedEmployee(this.key1,this.key2).subscribe(
    (data:any)=>{
      this.employees =data
    },
    (err:any)=>{
      alert("INTERNAL SERVER ERROR")
    }
  )
}

delete(id:string){
  this._employeeService.deleteEmployee(id).subscribe(
    (data:any)=>{
      alert("Deleted Successfully")
      location.reload();
    },
    (err:any)=>{
      alert("INTERNAL SERVER ERROR")
    }
  )
}

view(id:string){
  this._employeeService.viewEmployee(id).subscribe(
    (data:any)=>{
      this.singleEmployee =data;
    },
    (err:any)=>{
      alert("INTERNAL ERROE SERVER")
    }
  )
}

}
