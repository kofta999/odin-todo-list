import "./styles.css";
import { Todo } from "../todos";
import { State } from "../state";

export interface IProject {
  name: string;
  todos: Todo[];
}

export class Project implements IProject {
  constructor(public name: string = "Default", public todos: Todo[] = []) {}

  addToList(todo: Todo) {
    this.todos.push(todo);
    State.addProjectToList(this);
  }

  removeFromList(todo: Todo) {
    const idx = this.todos.indexOf(todo);
    if (!idx) return;

    this.todos.splice(idx, 1);
    State.addProjectToList(this);
  }
}
