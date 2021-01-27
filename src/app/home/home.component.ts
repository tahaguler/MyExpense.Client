import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
// Todo: We actually don't need users. Some of this information will be transformed to budget data.
  registerMode = false;


  constructor() {
  }

  ngOnInit(): void {

  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
    // If you are sending data or something from child component to parent component don't forget there is 4 steps.
  }

}
