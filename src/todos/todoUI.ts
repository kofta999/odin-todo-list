import { formatDistanceToNow } from "date-fns";
import { Todo } from ".";
import { Project } from "../projects";

export default function TodoUI(todo: Todo, project: Project) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  // const todoPriority = document.createElement("div");
  const todoName = document.createElement("h2");
  const todoDate = document.createElement("p");

  todoName.textContent = todo.name;
  todoDate.textContent = formatDistanceToNow(todo.dueDate, { addSuffix: true });

  todoDiv.innerHTML = `
  <div class="priority ${todo.priority}"></div>
  `;

  todoDiv.append(todoName, todoDate);

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
  markDoneButton.addEventListener("click", () => {
    todo.markAsCompleted();
    markDoneButton.textContent = markDoneButton.textContent === "Done" ? "Mark as Done" : "Done"
    todoName.classList.toggle("line-through");
    todoDate.classList.toggle("line-through");
  });

  todoDiv.append(deleteButton, markDoneButton);

  return todoDiv;
}
