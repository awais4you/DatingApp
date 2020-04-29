import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AltertifyService } from '../_services/altertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AltertifyService) { }

  ngOnInit() {
  }

    login()
    {
      this.authService.login(this.model).subscribe(
        next => {
        // console.log('Logged in Successful');
          this.alertify.success('Logged in Successfully');
        },
        error => {
          // console.log(error);
          this.alertify.error(error);
        }
      );
    }

    loggedIn(){
      // const token = localStorage.getItem('token');
      // return !!token;
      // short hand if something in token then return true else false
      return this.authService.loggedIn();
    }

    logout(){
      localStorage.removeItem('token');
      // console.log('logged out');
      this.alertify.message('logged out');
    }
}
