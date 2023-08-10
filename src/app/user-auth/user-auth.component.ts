import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  
  signupForm!: FormGroup;
  isSignupForm : boolean = true;
  loginForm!: FormGroup;
  loginError : string = '';
  error_messages = 
    {
      email: [
        {type: 'required', message: 'This field is required.'},
        {type: 'pattern', message: 'Email must be of proper format.'}
      ],
      password : [
        {type: 'required', message: 'This field is required'},
        {type: 'pattern', message: 'Password must contain atleast 8 characters.'}

      ],
      name: [
        {type: 'required', message: 'This field is required.'}
      ],
    }

  constructor(
    private fb: FormBuilder,
    private user: UserService,
    private toastr: ToastrService,
    private route: Router
  ){
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['',[Validators.required, Validators.maxLength(8)]]
    })
    this.loginForm = this.fb.group({
      email: ['',[Validators.required, Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
      password: ['', [Validators.required, Validators.maxLength(8)]]
    })
  }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.signupForm.value);
    this.user.signUp(this.signupForm.value);
  }

  login(){
    this.loginError ="";
    console.log(this.loginForm.value);
    this.user.login(this.loginForm.value);
    // this.user.isLoggedInError.subscribe((error)=>{
    //   if(error){
    //     this.loginError = "Invalid Credentials" ;
    //   }
    // });
  }

  goToLogin(){
    this.isSignupForm = false;
  }

  goToSignup(){
    this.isSignupForm = true;
  }

  

}

