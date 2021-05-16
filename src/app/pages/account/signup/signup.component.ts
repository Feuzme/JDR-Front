import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  cities2: any[] = [];


  value1: string;

  value2: string;

  value3: string;

  value4: string;
  constructor() { }

  ngOnInit(): void {
  }

}
