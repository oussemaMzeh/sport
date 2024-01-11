import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl: string = "http://localhost:3000/users"
  constructor(private httpClient: HttpClient) { }

  signup(user: any, img: File) {
    let fData = new FormData();
    fData.append("firstName",user.firstName);
    fData.append("lastName",user.lastName);
    fData.append("email",user.email);
    fData.append("pwd",user.pwd);
    fData.append("tel",user.tel);
    fData.append("role",user.role);
    fData.append("img",img);
    return this.httpClient.post<{ msg: any }>(`${this.userUrl}/signup`, fData);
  }
  login(user) {
    return this.httpClient.post<{ msg: boolean, token: any }>(`${this.userUrl}/login`, user);
  }
}
