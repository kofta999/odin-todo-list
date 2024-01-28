import { Todo } from ".";
import { Project } from "../projects";
import TodoUI from "./todoUI";

export default function TodoListUI(todos: Todo[], project: Project) {
  const todoListDiv = document.createElement("div");
  todoListDiv.id = "todos"

  todos.forEach((todo) => todoListDiv.appendChild(TodoUI(todo, project)));

  return todoListDiv;
}
