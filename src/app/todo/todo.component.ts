import { Component, OnInit } from '@angular/core';
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
  constructor() {}

  ngOnInit(): void {}
}
