import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _httpClient:HttpClient) { }

  createEmployee(data:any):Observable<any>{
    return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees", data)
  }

  getEmployee():Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees")
  }

  viewEmployee(id:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id)
  }

  pagination(value1:number,value2:number):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+value1+"&page="+value2)
  }
  filteredEmployee(key:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+key)
  }
  sortedEmployee(key1:string,key2:string):Observable<any>{
    return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+key1+"&order="+key2)
  }
  deleteEmployee(id:string){
    return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id)
  }
}
