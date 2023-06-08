import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  userObj: any = {
    username: "",
    password: ""
  };

  constructor(private router:Router, private service : AppServiceService){}

  ngOnInit(): void {
    
  }

  volverHome(){
    this.router.navigate(['']);
  }

  signIn(){
    this.service.signup(this.userObj).subscribe((response) => {
      console.log(response)
    })
    this.router.navigate(['']);
  }
}
