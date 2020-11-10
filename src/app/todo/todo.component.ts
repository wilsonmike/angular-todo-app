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
  showIndex: number = null;
  constructor() {}

  ngOnInit(): void {}
  addTodos = (form: NgForm): void => {
    let newTask: Todo = {
      task: form.value.addTodo,
      completed: false,
    };
    this.todos.push(newTask);
    form.reset();
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

  setShowIndex = (index: number): void => {
    this.showIndex = index;
  };

  editTask = (form: NgForm, todo: Todo): void => {
    todo.task = form.value.edit;
    this.showIndex = null;
  };
}
