import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit{

   constructor(private router:Router){}

  ngOnInit(): void {
    
  }

  volverHome(){
    this.router.navigate(['']);
  }
}
