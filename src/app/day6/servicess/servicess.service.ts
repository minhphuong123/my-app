import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError,tap } from 'rxjs/operators';
import {day6} from '../servicess/day6.model';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'app;ication/json'})
};
const apiUrl = 'https://5f01f1cd9e41230016d4299b.mockapi.io/api/employees';
@Injectable({
  providedIn: 'root'
})
export class ServicessService {


  constructor(private httpClient:HttpClient) { }
  getAll():Observable<day6[]>{
    return this.httpClient.get<day6[]>(apiUrl).pipe(
      tap(ok => console.log("oke get all"))
    )
  }

  create(newObj:  day6):Observable<any>{
    return this.httpClient.post<day6>(apiUrl,newObj,httpOptions).pipe(
      tap(ok => console.log("create done!"))
    )
  }
}
