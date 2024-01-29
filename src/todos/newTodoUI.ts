import { Priority, Todo } from ".";
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
  <div class="form-control">
  <input placeholder="Todo name" required type="text" id="name" name="name" />
  </div>
  <div class="form-control">
  <input placeholder="Due date" required type="date" id="dueDate" name="dueDate" />
  </div>
  <div class="form-control">
  <label class="label">
    <span class="label-text text-3xl">Priority:</span>
  </label>
  <div class="space-y-2">
    <label class="label cursor-pointer">
      <span class="label-text">Low</span> 
      <input type="radio" value="low" name="priority" class="radio radio-success" checked />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text">Medium</span> 
      <input type="radio" value="medium" name="priority" class="radio radio-warning" />
    </label>
    <label class="label cursor-pointer">
      <span class="label-text">High</span> 
      <input type="radio" value="high" name="priority" class="radio radio-error" />
    </label>
  </div>
</div>
</div>
  <button class="btn btn-neutral" type="submit">Add</button>
  `;

  dialog.addEventListener("submit", (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const todo = new Todo(
      data.get("name")?.toString()!,
      new Date(data.get("dueDate")?.toString()!),
      data.get("priority")?.toString()! as Priority
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
