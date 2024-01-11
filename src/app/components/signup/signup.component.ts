import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  title: string = "Signup"
  path: string;
  imagePreview: any;
  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      pwd: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(9),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{4,9}')
      ]],
      tel: [''],
      img: ['']
    })

  }

  signup() {
    console.log('signup', this.signupForm.value);
    this.path = this.router.url;
    //if (this.path == "/signup") {
    //  this.signupForm.value.role = "user"
    //} else {
    //  this.signupForm.value.role = "admin"
    //}
    this.signupForm.value.role = this.path == "/signup" ? "user" : "admin"

    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (data) => {
        console.log('here data after signup', data.msg);

      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }


}
