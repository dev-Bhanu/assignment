import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url='https://api.github.com/users/sameerkali';
  constructor(private http:HttpClient) { }
  users()
  {
    return this.http.get(this.url);
  }
}
