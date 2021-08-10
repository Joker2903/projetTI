import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GiftDTO } from '../dto/giftDTO';

@Injectable({
  providedIn: 'root',
})
export class GiftService {
  private readonly URL_API: string = 'api/gift';
  constructor(private http: HttpClient) {}

  query(): Observable<GiftDTO[]> {
    return this.http.get<GiftDTO[]>(this.URL_API);
  }

  get(id: number): Observable<GiftDTO> {
    return this.http.get<GiftDTO>(`${this.URL_API}/${id}`);
  }

  post(giftDto: GiftDTO): Observable<GiftDTO> {
    return this.http.post<GiftDTO>(this.URL_API, giftDto);
  }

  put(giftDto: GiftDTO): Observable<any> {
    return this.http.put(this.URL_API, giftDto);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`);
  }
}
