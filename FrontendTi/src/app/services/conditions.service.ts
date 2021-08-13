import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConditionDTO } from '../dto/conditionDTO';
import { ConditionGiftDTO } from '../dto/conditionGiftDTO';

@Injectable({
  providedIn: 'root',
})
export class ConditionsService {
  private readonly URL_API: string = 'api/condition';
  constructor(private http: HttpClient) { }

  query(): Observable<ConditionDTO[]> {
    return this.http.get<ConditionDTO[]>(this.URL_API);
  }

  queryGiftCondition(): Observable<ConditionGiftDTO[]> {
    return this.http.get<ConditionGiftDTO[]>(`${this.URL_API}/gift`);
  }

  get(id: number): Observable<ConditionDTO> {
    return this.http.get<ConditionDTO>(`${this.URL_API}/${id}`);
  }

  post(conditionDto: ConditionDTO): Observable<ConditionDTO> {
    return this.http.post<ConditionDTO>(this.URL_API, conditionDto);
  }
}
