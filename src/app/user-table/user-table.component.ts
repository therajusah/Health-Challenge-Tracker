import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchQuery: string = '';
  filterCategory: string = 'All';
  currentPage: number = 1;
  itemsPerPage: number = 3;
  totalPages: number = 0;
  showModal: boolean = false;
  newUser: string = '';
  newWorkoutType: string = '';
  newWorkoutMinutes: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadFromLocalStorage();
    if (this.users.length === 0) {
      this.users = [
        {
          id: 1,
          name: 'John Doe',
          workouts: [
            { type: 'Running', minutes: 30 },
            { type: 'Cycling', minutes: 45 }
          ]
        },
        {
          id: 2,
          name: 'Jane Smith',
          workouts: [
            { type: 'Swimming', minutes: 60 },
            { type: 'Running', minutes: 20 }
          ]
        },
        {
          id: 3,
          name: 'Mike Johnson',
          workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 }
          ]
        }
      ];
      this.saveToLocalStorage();
    }
    this.filterUsers(); 
    this.updatePagination();
  }

  getUniqueWorkoutTypes(): string[] {
    const workoutTypes = new Set(this.users.flatMap(user => user.workouts.map(workout => workout.type)));
    return Array.from(workoutTypes);
  }

  filterUsers(): void {
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.filterCategory === 'All' || user.workouts.some(workout => workout.type === this.filterCategory))
    );
    this.currentPage = 1;
    this.totalPages = Math.ceil(this.filteredUsers.length / this.itemsPerPage);
    this.updatePagination();
  }

  updatePagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.filteredUsers = this.users.filter(user =>
      user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.filterCategory === 'All' || user.workouts.some(workout => workout.type === this.filterCategory))
    ).slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePagination();
    }
  }

  calculateTotalMinutes(workouts: { type: string, minutes: number }[]): number {
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }

  addWorkout(): void {
    if (this.newUser && this.newWorkoutType && this.newWorkoutMinutes !== null) {
      const user = this.users.find(user => user.name.toLowerCase() === this.newUser.toLowerCase());
      if (user) {
        user.workouts.push({ type: this.newWorkoutType, minutes: this.newWorkoutMinutes });
      } else {
        const newId = this.users.length > 0 ? Math.max(...this.users.map(user => user.id)) + 1 : 1;
        this.users.push({
          id: newId,
          name: this.newUser,
          workouts: [{ type: this.newWorkoutType, minutes: this.newWorkoutMinutes }]
        });
      }
      this.filterUsers();
      this.updatePagination();
      this.saveToLocalStorage();
      this.closeModal();
    }
  }

  closeModal(): void {
    this.showModal = false;
    this.newUser = '';
    this.newWorkoutType = '';
    this.newWorkoutMinutes = null;
  }

  saveToLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  loadFromLocalStorage(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }
}
