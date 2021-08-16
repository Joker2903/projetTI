import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/model/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit, OnDestroy {

  @Input()
  client: Client = new Client()
  @Output()
  deletedClient: EventEmitter<number> = new EventEmitter<number>()
  sponsorFullName: string = ""
  sponsorCount: number = 0
  subscriptions: Subscription[] = []

  constructor(private router: Router, private clientService: ClientService) { }
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  ngOnInit(): void {
    this.getSponsorCount()
    this.getSponsorBy()
  }
  getSponsorBy() {
    const sub = this.clientService.get(this.client.sponsorID)
      .subscribe(client => this.sponsorFullName = `${client.firstname} ${client.lastname}`)
    this.subscriptions.push(sub)
  }
  getSponsorCount() {
    const sub = this.clientService.getSponsoredClientByID(this.client.clientID)
      .subscribe(count => this.sponsorCount = count)
    this.subscriptions.push(sub)
  }

  emitDeletedClient(event: Event) {
    event.stopPropagation()
    this.deletedClient.next(this.client.clientID)
  }

  navigateToSingleClient() {
    this.router.navigate([`client/${this.client.clientID}`])
  }

}
