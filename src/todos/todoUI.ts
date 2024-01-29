import { formatDistanceToNow } from "date-fns";
import { Todo } from ".";
import { Project } from "../projects";

export default function TodoUI(todo: Todo, project: Project) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  todoDiv.innerHTML = `
  <div class="priority ${todo.priority}"></div>
  <h2>${todo.name}</h2>
  <p>${formatDistanceToNow(todo.dueDate, { addSuffix: true })}</p>
  `;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.id = "deleteTodo";
  deleteButton.addEventListener("click", () => {
    project.removeFromList(todo);
    todoDiv.remove();
  });

  const markDoneButton = document.createElement("button");
  markDoneButton.id = "markTodo";
  markDoneButton.textContent = "Mark as Done";
  markDoneButton.addEventListener("click", () => todo.markAsCompleted());

  todoDiv.append(deleteButton, markDoneButton);

  return todoDiv;
}
