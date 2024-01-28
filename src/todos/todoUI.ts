import { Todo } from ".";
import { Project } from "../projects";

export default function TodoUI(todo: Todo, project: Project) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // TODO: add rest of properties
  todoDiv.innerHTML = `
  <h2>${todo.name}</h2>
  <p>${todo.description}</p>
  `;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    project.removeFromList(todo);
    todoDiv.remove();
  });

  const markDoneButton = document.createElement("button");
  markDoneButton.textContent = "Mark as Done";
  markDoneButton.addEventListener("click", () => todo.markAsCompleted());

  todoDiv.append(deleteButton, markDoneButton);

  return todoDiv;
}
