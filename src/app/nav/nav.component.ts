import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable, of } from 'rxjs';

import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};


  constructor(public accountService: AccountService, private router: Router, private toastr: ToastrService ) {
  }

  ngOnInit(): void {
    
  }

  login() {
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: error => {
        this.toastr.error(error.error)
      }
    });
  }

  logout() {
    this.accountService.logOut();    
    this.router.navigateByUrl('/');
  }
}
