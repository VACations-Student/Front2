import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  userObj: any = {
    username: "",
    password: ""
  };

  constructor(private router:Router, private service : AppServiceService){}

  volverHome(){
    this.router.navigate(['']);
  }

  signIn(){
    if (this.userObj.username == "" || this.userObj.password == ""){
    }else{
    this.service.signup(this.userObj).subscribe((response) => {
      console.log(response)
    })
    this.router.navigate(['']);
  }
}
}
