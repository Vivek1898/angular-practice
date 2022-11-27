import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError,  Observable, retry,throwError } from 'rxjs';
import { IStocks } from '../models/IStocks';
@Injectable({
  providedIn: 'root'
})
export class StocksService {

 
  constructor(private httpClient: HttpClient) { }

   public getAllStocks():Observable<IStocks[]>{
    let dataURL:string = 'https://gist.githubusercontent.com/Vivek1898/40676c89d143e040992b043cf8b0623d/raw/f09b6d475f62b36831ad5f6ef5b6f48fec8e5543/stocks1244.json';
    return this.httpClient.get<IStocks[]>(dataURL).pipe(
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
