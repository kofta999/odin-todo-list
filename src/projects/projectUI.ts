import { Project } from ".";
import TodoListUI from "../todos/todoListUI";
import { State } from "../state";

export default function ProjectUI(project: Project) {
  const projectBtn = document.createElement("button");
  projectBtn.textContent = project.name;

  projectBtn.addEventListener("click", () => {
    const activeButton = State.getActiveButton();
    if (activeButton) {
      activeButton.classList.remove("active");
    }

    State.setActiveButton(projectBtn);
    projectBtn.classList.add("active");

    const todoDiv = document.querySelector<HTMLDivElement>("#todos")!;
    todoDiv.innerHTML = "";
    todoDiv.appendChild(TodoListUI(project.todos, project));
  });

  return projectBtn;
}
