import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientDTO } from '../dto/clientDTO';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private readonly URL_API: string = "api/client"
  constructor(private http: HttpClient) { }

  query(): Observable<ClientDTO[]> {
    return this.http.get<ClientDTO[]>(this.URL_API);
  }

  get(id: number): Observable<ClientDTO> {
    return this.http.get<ClientDTO>(`${this.URL_API}/${id}`)
  }
  getSponsoredClientByID(id: number): Observable<number> {
    return this.http.get<number>(`${this.URL_API}/sponsor/${id}`)
  }

  post(clientDTO: ClientDTO): Observable<ClientDTO> {
    return this.http.post<ClientDTO>(this.URL_API, clientDTO)
  }

  put(clientDTO: ClientDTO): Observable<any> {
    return this.http.put(this.URL_API, clientDTO)
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.URL_API}/${id}`)
  }
}
