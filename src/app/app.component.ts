import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { AuthService } from "./auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentChecked {
  title = 'angularjwt';

  constructor(private authService: AuthService){}


  userStatus = this.authService.userStatus;

  logout(){
    this.authService.logout();
  }

  ngOnInit(){
    this.authService.userStatusChanges.subscribe(x => this.userStatus = x);
    console.log(this.userStatus)

  }

  ngAfterContentChecked(){
    this.authService.getStatusOnRefresh();
  }
}
