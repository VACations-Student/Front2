import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit{

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

  logIn(){
    this.service.signin(this.userObj).subscribe((response) => {
      console.log("token: ", response)
      localStorage.setItem("token", String(response))
    })
    this.router.navigate(['']);
  }
}
