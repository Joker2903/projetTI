import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
})
export class ListClientComponent implements OnInit, OnDestroy {
  private subscriptionsClients: Subscription[] = [];
  public clients: Client[] = [];

  constructor(private clientService: ClientService, private router: Router) { }

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

  getClients() {
    const sub = this.clientService.query().subscribe((clientsDTO) => {
      this.clients = clientsDTO.map((clientDTO) =>
        new Client().fromClientDTO(clientDTO)
      );
      console.log(this.clients);
    });
    this.subscriptionsClients.push(sub);
  }

  deleteQuestion(idEmitted: number) {
    const sub = this.clientService.delete(idEmitted).subscribe(() => {
      this.clients = this.clients.filter(
        (client) => client.clientID !== idEmitted
      );
    });
    console.log(this.clients);

    this.subscriptionsClients.push(sub);
  }
  addEmittedClient($event: Client) {
    this.clients.push($event)
  }

  AddClient() {
    this.router.navigate([`client/add-client`]);
  }
}
