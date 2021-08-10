import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Admin } from '../model/admin';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Admin>;
  private currentUser: Observable<Admin>;

  constructor(private http: HttpClient) {
    if (localStorage.getItem("currentUser") !== null) {

    }
    const adminInStorage = JSON.parse(localStorage.getItem("currentAdmin")!)
    this.currentUserSubject = new BehaviorSubject<Admin>(adminInStorage);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Admin {
    return this.currentUserSubject.value;
  }

  public get currentUserSub(): BehaviorSubject<Admin> {
    return this.currentUserSubject;
  }

  login(login: string, password: string) {
    return this.http.post<any>("api/admin/connect", { login, password })
      .pipe(map(admin => {
        localStorage.setItem('currentAdmin', JSON.stringify(admin));
        this.currentUserSubject.next(admin);
        return admin;
      }));
  }

  logout() {
    localStorage.removeItem("currentAdmin");
    this.currentUserSubject.next(null);
  }
}
