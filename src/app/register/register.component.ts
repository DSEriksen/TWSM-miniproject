import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registeredUserData = {};

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  registerUser() {
    this.auth.registerUser(this.registeredUserData).subscribe(
      res => {
        console.log(res),
        localStorage.setItem('token', res.token),
        this.router.navigate(['events']);
      },
      err => console.log(err)
    );
  }
}
