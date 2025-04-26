import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

interface ToDo {
  id: string;
  name: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatInputModule, MatListModule, MatButtonModule, FormsModule, MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentToDo: string = ""
  todoList: ToDo[] = [];

  addToDo() {
    if (!this.currentToDo) {
      return;
    }
    const todo = {
      id: crypto.randomUUID(),
      name: this.currentToDo,
    }
    this.todoList.push(todo);
    this.currentToDo = '';
  }

  remove(id: string) {
    const index = this.todoList.findIndex(item => item.id === id);
    this.todoList.splice(index, 1);
  }
}
