import { NgModule } from '@angular/core';
import { CommonModule} from "@angular/common";
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';


import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SignupComponent]
})
export class SignupModule { }