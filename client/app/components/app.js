'use strict';
import { Component, View } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import appTemplate from './app.html';
import { Todo } from './todo';

@Component({
  selector: 'todo-app',
})
@View({
  template: appTemplate,
  directives: [ROUTER_DIRECTIVES],
})
@RouteConfig([
  { path: '/:status', component: Todo, as: 'Todo' }
])
export class App {
}
