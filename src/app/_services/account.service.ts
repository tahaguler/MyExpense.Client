import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// Services are injectable. Services are singleton. Services aren't disposed until the application dies.
// We typically use services for the http requests
export class AccountService {

  baseUrl = 'http://localhost:55849/api/';

  constructor(private http: HttpClient) {
  }

  login(model: any){
  return this.http.post(this.baseUrl + 'account/login', model);
  }
}

