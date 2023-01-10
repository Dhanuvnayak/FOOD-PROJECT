import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public avail:boolean = false;
  public msg:string="";
  private baseUri: string = "https://food-project.onrender.com";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }

  check() {
    return this.http.get(this.baseUri + "/check", { headers: this.headers });
  }

  register(body: any) {
    return this.http.post('https://food-project.onrender.com/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  readUser() {
    return this.http.get(this.baseUri + "/read", { headers: this.headers });
  }

  reset(body: any) {
    return this.http.post('https://food-project.onrender.com/reset', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  resetpassworddone(body: any) {

    return this.http.put('https://food-project.onrender.com/forgot-password-done', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getOtp() {
    return this.http.get(this.baseUri + "/otp", { headers: this.headers });
  }

  login(body: any) {
    return this.http.post('https://food-project.onrender.com/login', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getAllFood() {
    return this.http.get(this.baseUri + "/getallfood", { headers: this.headers });
  }


  Oneuser(id) {
    return this.http.delete(this.baseUri + "/getoneuser/" + id, { headers: this.headers });
  }


  // if present then true otherwise false
  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }


  logoutUser() {
    localStorage.removeItem('token')
    this.router.navigate(['/'])
  }

  editprofile(id,name,email,contact) {
    return this.http.get(this.baseUri + "/editprofile?id=" + id+"&name="+name+"&email="+email+"&contact="+contact, { headers: this.headers });
  }

  changepassword(body: any) {
    return this.http.post('https://food-project.onrender.com/changepassword', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  sendfeedback(body: any) {
    return this.http.post('https://food-project.onrender.com/sendfeedback', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }

  getCartItem()
  {
    return this.http.get(this.baseUri + "/getcartitem", { headers: this.headers });
  }
}
