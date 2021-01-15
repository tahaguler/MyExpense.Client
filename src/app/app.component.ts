import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MyExpense';
  users: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() { // this is executed right after constructor.
    this.getUsers();
  }

  getUsers() { //   https://localhost:44313
    this.http.get('http://localhost:55849/api/users').subscribe(response => {
      this.users = response;
    }, error => {
      console.log(error);
    });
  }
}
