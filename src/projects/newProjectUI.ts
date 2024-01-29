import { Project } from ".";
import { State } from "../state";
import ProjectUI from "./projectUI";

export default function NewProjectUI() {
  const dialog = document.createElement("dialog");
  dialog.classList.add("modal");
  dialog.id = "newProject";
  const form = document.createElement("form");
  form.classList.add("modal-box", "flex", "flex-col", "gap-5");
  form.innerHTML = `
  <h1>Add Project:</h1>
  <input placeholder="Project name" required type="name" id="name" name="name" />
  <button class="btn btn-neutral" type="submit">Add</button>
  `;

  dialog.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const name = new FormData(target).get("name");
    if (!name) return;
    console.log(name);
    const project = new Project(name.toString());

    State.addProjectToList(project);
    document
      .querySelector<HTMLDivElement>("#projects")
      ?.appendChild(ProjectUI(project));

    dialog.close();
    target.reset();
  });

  dialog.appendChild(form);

  return dialog;
}
