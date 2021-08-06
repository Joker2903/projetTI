import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit {
  addClientForm: FormGroup = this.initForm();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): FormGroup {
    this.addClientForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      mail: ['', Validators.required],
      sponsorID: [''],
      password: ['', Validators.required],
    });
    return this.addClientForm;
  }
  onSubmit() {
    console.log(this.addClientForm.controls);
    const client = new Client();
    client.FirstName = this.addClientForm.get('firstname')?.value;
    client.LastName = this.addClientForm.get('lastname')?.value;
    client.Mail = this.addClientForm.get('mail')?.value;
    client.SponsorID = +this.addClientForm.get('sponsorID')?.value;
    client.Password = this.addClientForm.get('password')?.value;
    console.log(client);
  }
}
