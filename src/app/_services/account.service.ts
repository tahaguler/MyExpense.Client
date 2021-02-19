/* tslint:disable:max-line-length */
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../_models/user';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// Services are injectable. Services are singleton. Services aren't disposed until the application dies.
// We typically use services for the http requests
// RxJS is Reactive Extensions for JavaScript
// Subscribing with Pipe is a bit better in some cases, it does subscribe and unsubscribes automatically.


// Todo: <!--            aria-current="page" bu ne demek?--> <!--          aria-label="Search" bu ne demek?-->
export class AccountService {

  baseUrl = 'https://localhost:44316/api/'; // ToDo: This url needs to be turned into an https. C# side needs modifications.
  private currentUserSource = new ReplaySubject<User>(1); // Todo: What does ReplaySubject do?
  currentUser$ = this.currentUserSource.asObservable();

  // ReplaySubject makes a storage buffer type of thing, like a cache. We turn it into an observable on the line 19.

  constructor(private http: HttpClient) {
  } // If we update the parameter as public, we can use it in the html class as well.

  login(model: any) {
    return this.http.post(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response; // Todo: why did we use const here?
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'account/register', model).pipe(
      map((user: User) => {
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.currentUserSource.next(user);
        }
      })
    );
  }

  setCurrentUser(user: User) {
    this.currentUserSource.next(user);
  }


  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }
}

// These html codes were used for reactive navbar.
// <!--      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">-->
// <!--        <span class="navbar-toggler-icon"></span>-->
//     <!--      </button>-->
// <!--      <div class="collapse navbar-collapse" id="navbarCollapse">-->


// Notes
// <!--          # is a templante reference variable-->
// <!--if we want to hide something and not remove completely we would use [hidden]="loggedin" not ngif. Ng if removes the tags completely-->

