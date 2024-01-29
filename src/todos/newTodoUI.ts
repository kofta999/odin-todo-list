import { Todo } from ".";
import { State } from "../state";
import TodoUI from "./todoUI";

export default function NewTodoUI() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("modal");
  dialog.id = "newTodo";
  const form = document.createElement("form");
  form.classList.add("modal-box", "flex", "flex-col", "gap-5");
  form.innerHTML = `
  <h1>Add Todo:</h1>
  <input placeholder="Todo name" required type="text" id="name" name="name" />
  <input placeholder="Description" required type="text" id="description" name="description" />
  <button class="btn btn-neutral" type="submit">Add</button>
  `;

  dialog.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const todo = new Todo(
      data.get("name")?.toString()!,
      data.get("description")?.toString()!,
      new Date()
    );

    const currProjectName =
      document.querySelector<HTMLButtonElement>(".active")?.textContent;

    const currProject = State.getProjectsList().find(
      (project) => project.name === currProjectName
    );

    currProject?.addToList(todo);

    document
      .querySelector<HTMLDivElement>("#todos")
      ?.appendChild(TodoUI(todo, currProject!));

    dialog.close();
    target.reset();
  });

  dialog.appendChild(form);

  return dialog;
}
