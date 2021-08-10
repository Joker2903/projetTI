import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/model/client';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {

  @Input()
  client: Client = new Client()
  @Output()
  deletedClient: EventEmitter<number> = new EventEmitter<number>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  emitDeletedClient() {
    this.deletedClient.next(this.client.clientID)
  }

  navigateToSingleClient() {
    this.router.navigate([`client/${this.client.clientID}`])
  }

}
