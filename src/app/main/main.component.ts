import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from "@angular/forms";

import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  public postForm = new FormGroup({
    title: new FormControl('',  Validators.required),
    content: new FormControl('',  Validators.required),
   
  }); 

  createPost(formData: FormData){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
  
    let post = {
      title: formData["title"],
      content: formData["content"]
    }

    //send a post request to the 
    this.httpClient.post("http://localhost:8000/post/createPost", JSON.stringify(post), {headers: headers}).subscribe(res => {
        //set the token to localStorage
        //localStorage.setItem("access_token", res["token"]);
        console.log(res)
      
    });
  }

  ngOnInit() {
  }

}
