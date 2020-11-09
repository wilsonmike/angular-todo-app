import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../interface/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Water the unicorn',
      completed: true,
    },
    {
      task: 'Make waffles',
      completed: false,
    },
    {
      task: 'Finish Angular App',
      completed: true,
    },
    {
      task: 'Gym',
      completed: false,
    },
  ];
  todoSearchTerm: string = '';
  constructor() {}

  ngOnInit(): void {}
  addTodos = (form: NgForm): void => {
    let newTask: Todo = {
      task: form.value.addTodo,
      completed: false,
    };
    this.todos.push(newTask);
  };
  // adoptedAnimal = (type: string, index: number): void => {
  //   type === 'cat' ? this.cats.splice(index, 1) : this.dogs.splice(index, 1);
  removeTask = (index: number): void => {
    this.todos.splice(index, 1);
  };
  completeTask = (index: number): void => {
    this.todos[index].completed = true;
  };
  filterTodos = (): Todo[] => {
    if (!this.todoSearchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentTodoName = todo.task.toLowerCase().trim();
        return currentTodoName.includes(
          this.todoSearchTerm.toLowerCase().trim()
        );
      });
    }
  };

  setTodoSearchTerm = (form: NgForm): void => {
    this.todoSearchTerm = form.value.searchTerm;
  };
  // filterCats = (): Animal[] => {
  //   if (!this.catSearchTerm) {
  //     return this.cats;
  //   } else {
  //     return this.cats.filter((cat) => {
  //       let currentCatName = cat.name.toLowerCase().trim();
  //       return currentCatName.includes(this.catSearchTerm.toLowerCase().trim());
  //     });
  //   }
  // };

  // setCatSearchTerm = (form: NgForm): void => {
  //   this.catSearchTerm = form.value.searchTerm;
  // };
}
