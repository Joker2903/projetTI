import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-single-client',
  templateUrl: './single-client.component.html',
  styleUrls: ['./single-client.component.css'],
})
export class SingleClientComponent implements OnInit, OnDestroy {
  private subscriptionsClients: Subscription[] = [];
  client: Client = new Client();
  updateClientForm: FormGroup = this.initForm();
  clientID = +this.route.snapshot.params['id'];
  clients: Client[] = [];

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  ngOnDestroy(): void {
    for (let i = this.subscriptionsClients.length - 1; i >= 0; i--) {
      const subscription = this.subscriptionsClients[i];
      subscription && subscription.unsubscribe();
      this.subscriptionsClients.pop();
    }
  }

  initForm(): FormGroup {
    return (this.updateClientForm = this.formBuilder.group({
      firstname: [this.client.firstname, Validators.required],
      lastname: [this.client.lastname, Validators.required],
      mail: [this.client.mail, Validators.required],
      sponsorID: [''],
    }));
  }

  getSingleClient() {
    const sub = this.clientService.get(this.clientID).subscribe((client) => {
      this.client = new Client().fromClientDTO(client);
      this.initForm();
    });
    this.subscriptionsClients.push(sub);
  }

  getClients() {
    const sub = this.clientService.query().subscribe((clientsDTO) => {
      this.clients = clientsDTO.map((clientDTO) =>
        new Client().fromClientDTO(clientDTO)
      );
      console.log(this.clients);
      this.getSingleClient();
    });
    this.subscriptionsClients.push(sub);
  }

  onSubmit() {
    console.log(this.updateClientForm.controls);
    this.client.firstname = this.updateClientForm.get('firstname')?.value;
    this.client.lastname = this.updateClientForm.get('lastname')?.value;
    this.client.mail = this.updateClientForm.get('mail')?.value;
    this.client.sponsorID = +this.updateClientForm.get('sponsorID')?.value;
    console.log(this.client);
    const sub = this.clientService
      .put(this.client.toClientDTO())
      .subscribe((clientDTO) => console.log(clientDTO));
    this.subscriptionsClients.push(sub);
  }
}
