import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  Url = "http://localhost:3000/data";
  getallusers(): Observable<User[]> {
    return this.http.get<User[]>(this.Url)

  }

  addnewuser(user:User):Observable<User[]>{
    return this.http.post<User[]>(this.Url, user)

  }

  getwithid(id:number): Observable<User[]> {
    return this.http.get<User[]>(this.Url+"/"+id)

  }

  updateuser(id:number, user:User): Observable<User[]> {
    return this.http.put<User[]>(this.Url+"/"+id, user)

  }
  
  deletewithis(id:number): Observable<User[]> {
    return this.http.delete<User[]>(this.Url+"/"+id)

  }


}
