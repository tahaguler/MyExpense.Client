import {Component, OnInit} from '@angular/core';
import {AccountService} from '../_services/account.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  login() {
    this.accountService.login(this.model).subscribe(response => {
      this.router.navigateByUrl('/dashboard');
    }, error => {
      console.log(error);
      this.toastr.error(error.error); // todo: I can delete this to remove invalid password or invalid username toastr
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}

// html: welcome username yerine full name kullan
