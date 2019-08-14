import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, Form } from "@angular/forms";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public signinForm = new FormGroup({
    email: new FormControl('',  Validators.required),
    password: new FormControl('',  Validators.required),
   
  }); 

  signin(formData: FormData){
    this.authService.signup(formData["email"], formData["password"]);
  }
  
  
  ngOnInit() {
  }

}
