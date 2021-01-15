import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {

  public name: any;
  public contact: any;
  public email: any;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.check();
    this.getData();
  }

  getData() {
    this.name = "utsav";
    this.email = "shekhutsav1962001@gmail.com";
    this.contact = "7434069974"
  }
  check() {
    this.authService.check().subscribe(
      data => {
        console.log(data);
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          this.authService.logoutUser();
          this.router.navigate(['/error'])
        }
        console.log(error);
      }
    )
  }

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
