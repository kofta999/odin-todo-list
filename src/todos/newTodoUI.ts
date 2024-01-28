import { Todo } from ".";
import { State } from "../state";
import TodoUI from "./todoUI";

export default function NewTodoUI() {
  const dialog = document.createElement("dialog");
  const form = document.createElement("form");
  form.innerHTML = `
  <input placeholder="Todo name" required type="text" id="name" name="name" />
  <input placeholder="Description" required type="text" id="description" name="description" />
  <button type="submit">Add</button>
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
