import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    console.log(user);

    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        console.log(data);
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show(data.user.name + ' logged in Successfully', {cssClass: 'alert-success', timeout: 5000});
        this.router.navigate(['/']);
      } else {
        this.flashMessage.show('Something went wrong, Please try again', {cssClass: 'alert-danger', timeout: 5000});
        this.router.navigate(['/login']);
      }
    });
  }
}
