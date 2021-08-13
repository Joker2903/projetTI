import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientConditionDTO } from '../dto/clientConditionDTO';

@Injectable({
  providedIn: 'root'
})
export class ClientConditionService {

  private readonly URL_API: string = "api/clientcondition"
  constructor(private http: HttpClient) { }

  getByClient(clientID: number): Observable<ClientConditionDTO[]> {
    return this.http.get<ClientConditionDTO[]>(`${this.URL_API}/${clientID}`)
  }

  getBothByID(clientID: number, conditionID: number): Observable<ClientConditionDTO> {
    return this.http.get<ClientConditionDTO>(`${this.URL_API}/both/${clientID}/${conditionID}`)
  }

  post(clientCondition: ClientConditionDTO): Observable<ClientConditionDTO> {
    return this.http.post<ClientConditionDTO>(this.URL_API, clientCondition)
  }
}
