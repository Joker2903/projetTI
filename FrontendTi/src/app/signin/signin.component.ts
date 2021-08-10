import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm: FormGroup = this.initForm()

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
  }

  initForm(): FormGroup {
    return this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    console.log(this.signinForm.controls);
    this.authenticationService.login(this.signinForm.get('login').value, this.signinForm.get('password').value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(["/"]);
          console.log(data);
        }, error => {
          this.signinForm.reset();
        }
      );
  }

}
