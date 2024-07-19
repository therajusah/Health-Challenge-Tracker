import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([]);

  constructor() {}

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  addUser(user: User): void {
    const users = this.usersSubject.value;
    this.usersSubject.next([...users, user]);
  }

  clearUsers(): void {
    this.usersSubject.next([]);
  }
}
 