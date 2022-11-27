import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,  Observable, retry,throwError } from 'rxjs';
import { IEmployee } from '../models/IEmployee';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private httpClient: HttpClient) { }

   public getAllEmployees():Observable<IEmployee[]>{
    let dataURL:string = 'https://gist.githubusercontent.com/Vivek1898/f7f69daae244246ef38e807ce0e0d274/raw/2283ee8d72548dac8e7853814164dd3fc7b88c69/employee-12564.json';
    return this.httpClient.get<IEmployee[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  public handleError(error:HttpErrorResponse){
    let errorMessage:string = '';
    if(error.error instanceof ErrorEvent){
      // client Error
      errorMessage = `Error : ${error.error.message}`
    }
    else{
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
