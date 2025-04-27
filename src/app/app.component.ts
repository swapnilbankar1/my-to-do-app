import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

interface ToDo {
  id: string;
  name: string;
  isComplete: boolean;
}

@Component({
  selector: 'app-root',
  imports: [MatInputModule, MatListModule, MatButtonModule, FormsModule, MatIconModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentToDo = "";
  todoList: ToDo[] = [];

  addToDo() {
    if (!this.currentToDo) {
      return;
    }
    const todo = {
      id: crypto.randomUUID(),
      name: this.currentToDo,
      isComplete: false
    }
    this.todoList.push(todo);
    this.currentToDo = '';
  }

  remove(id: string) {
    const index = this.todoList.findIndex(item => item.id === id);
    this.todoList.splice(index, 1);
  }

  markAsCompleted(id: string) {
    const index = this.todoList.findIndex(item => item.id === id);
    this.todoList[index].isComplete = true;
    this.todoList = [...this.todoList];
  }
}
