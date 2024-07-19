import { TestBed } from '@angular/core/testing';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users as an observable', (done) => {
    service.getUsers().subscribe(users => {
      expect(users).toEqual([]);
      done();
    });
  });

  it('should add and retrieve users correctly', (done) => {
    const user: User = { 
      id: 1, 
      name: 'John Doe', 
      workouts: [
        { type: 'Running', minutes: 30 }, 
        { type: 'Cycling', minutes: 45 }
      ] 
    };
    
    service.addUser(user);
    
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(1);
      expect(users[0]).toEqual(user);
      done();
    });
  });

  it('should clear users correctly', (done) => {
    const user: User = { 
      id: 1, 
      name: 'John Doe', 
      workouts: [
        { type: 'Running', minutes: 30 }, 
        { type: 'Cycling', minutes: 45 }
      ] 
    };
    
    service.addUser(user);
    
    service.clearUsers();
    
    service.getUsers().subscribe(users => {
      expect(users.length).toBe(0);
      done();
    });
  });
});
