import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ClientConditionDTO } from '../dto/clientConditionDTO';
import { ConditionDTO } from '../dto/conditionDTO';
import { NotifiedClient } from '../dto/notifiedClient';
import { ClientConditionService } from '../services/client-condition.service';
import { ClientService } from '../services/client.service';
import { ConditionsService } from '../services/conditions.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = []
  notifiedClients: NotifiedClient[] = []

  constructor(private clientService: ClientService, private conditionService: ConditionsService, private clientConditionService: ClientConditionService) { }

  ngOnInit(): void {
    this.getClients()
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe)
  }

  async getSponsorCount(id: number): Promise<number> {
    // let count = 0
    const count = this.clientService.getSponsoredClientByID(id).toPromise()
    //   .getSponsoredClientByID(id)
    //   .subscribe(sponsoredCount => {
    //     count = sponsoredCount
    //   })
    // this.subscriptions.push(sub)
    return count
  }

  async getClientConditionByClient(id: number): Promise<ClientConditionDTO[]> {
    return await this.clientConditionService.getByClient(id).toPromise()
  }

  async getConditions(): Promise<ConditionDTO[]> {
    // let conditions: ConditionDTO[] = []
    const conditions = await this.conditionService.query().toPromise()
    // .subscribe(async (conditionDto) => {
    //   conditions = await conditionDto;
    //   console.log(conditions);
    // });
    // this.subscriptions.push(sub);
    return conditions;
  }

  async getClients() {
    const conditions = await this.getConditions()

    const sub = this.clientService
      .query()
      .subscribe(clientsDTO => {
        clientsDTO.forEach(async clientDTO => {
          const count = await this.getSponsorCount(clientDTO.clientID)
          const clientConditions = await this.getClientConditionByClient(clientDTO.clientID)
          if (count > 0) {

            const filteredConditions = conditions.filter(condition => {
              console.log(`Client has completed condition ? ${condition.numberOfClient - count}`);
              const completed: boolean = condition.numberOfClient - count <= 0
              const alreadyGivenGift: ClientConditionDTO = clientConditions.find(clientCondition => clientCondition.conditionId === condition.conditionID)
              if (completed && !alreadyGivenGift) {
                return condition
              }
            })
            console.log("Conditions completed for " + clientDTO.clientID + " " + clientDTO.firstname);
            console.log(filteredConditions);
            filteredConditions.map(condition => {
              const notifiedClient = {
                clientID: clientDTO.clientID,
                firstname: clientDTO.firstname,
                lastname: clientDTO.lastname,
                conditionID: condition.conditionID,
                numberOfClient: condition.numberOfClient
              }
              this.notifiedClients.push(notifiedClient)
            })
            console.log("NOTIFIED CLIENTS");
            console.log(this.notifiedClients);

          }

        })
      })
    this.subscriptions.push(sub)
  }

  giveGift(clientId: number, conditionId: number) {
    const sub = this.clientConditionService
      .post({ clientId, conditionId, completedDate: new Date() })
      .subscribe(clientCondition => console.log(clientCondition))
    this.subscriptions.push(sub)
    this.notifiedClients = this.notifiedClients.filter(notifiedClient => notifiedClient.clientID !== clientId && notifiedClient.conditionID !== conditionId)
  }

}
