import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {

  public employeeForm: FormGroup = new FormGroup({

    name: new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
      addressLine: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl()
    }),
    type: new FormControl(),
    hikes: new FormArray([])
  })

  get hikeFormArray() {
    return this.employeeForm.get('hikes') as FormArray;
  }

  addHike(){

    this.hikeFormArray.push(
      new FormGroup({
        year:new FormControl(),
        percentage:new FormControl()
      })
    )

  }
  constructor() {

    this.employeeForm.get('type')?.valueChanges.subscribe(
      (data: any) => {

        if (data == 'remote') {
          this.employeeForm.addControl('wifiBill', new FormControl),
            this.employeeForm.removeControl('travelFee')
        }
        else {
          this.employeeForm.addControl('travelFee', new FormControl)
          this.employeeForm.removeControl('wifiBill')
        }
      }
    )
  }
  onClick(){
    console.log(this.employeeForm.value)
  }

}
