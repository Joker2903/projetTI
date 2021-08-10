import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent implements OnInit, OnDestroy {
  addClientForm: FormGroup = this.initForm();
  private subscriptionPostClient: Subscription = new Subscription()
  private subscriptionsQueryClients: Subscription[] = []
  clients: Client[] = [];
  constructor(private formBuilder: FormBuilder, private clientService: ClientService) { }


  ngOnInit(): void {
    this.initForm();
    this.getClients();
  }

  ngOnDestroy(): void {
    for (let i = this.subscriptionsQueryClients.length - 1; i >= 0; i--) {
      const subscription = this.subscriptionsQueryClients[i];
      subscription && subscription.unsubscribe();
      this.subscriptionsQueryClients.pop();
    }
    this.subscriptionPostClient.unsubscribe();
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

  getClients() {
    const sub = this.clientService
      .query()
      .subscribe(clientsDTO => {
        this.clients = clientsDTO.map(clientDTO => new Client().fromClientDTO(clientDTO))
        console.log(this.clients)
      })
    this.subscriptionsQueryClients.push(sub)
  }

  onSubmit() {
    console.log(this.addClientForm.controls);
    const client = new Client();
    client.firstname = this.addClientForm.get('firstname')?.value;
    client.lastname = this.addClientForm.get('lastname')?.value;
    client.mail = this.addClientForm.get('mail')?.value;
    client.sponsorID = +this.addClientForm.get('sponsorID')?.value;
    client.password = this.addClientForm.get('password')?.value;
    console.log(client);
    const sub = this.clientService
      .post(client.toClientDTO())
      .subscribe(clientDTO => console.log(clientDTO)
      )
    this.subscriptionPostClient = sub;
  }
}
