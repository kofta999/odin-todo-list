import "./styles.css";
import { Todo } from "../todos";

export interface IProject {
  name: string;
  todos: Todo[];
}

export class Project implements IProject {
  constructor(public name: string = "Default", public todos: Todo[] = []) {}

  addToList(todo: Todo) {
    this.todos.push(todo);
  }

  removeFromList(todo: Todo) {
    const idx = this.todos.indexOf(todo);
    if (!idx) return;

    this.todos.splice(idx, 1);
  }
}
