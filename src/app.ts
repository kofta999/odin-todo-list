import ProjectListUI from "./projects/projectListUI";
import { State } from "./state";
import AddTodoButton from "./todos/addTodoButton";
import AddProjectButton from "./projects/addProjectButton";

export default function App() {
  const header = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Todos";
  header.id = "header";

  header.appendChild(title);

  const { addTodoButton, newTodoUI } = AddTodoButton();
  const { addProjectBtn, newProjectUI } = AddProjectButton();

  const currTodoUI = State.initState();

  const sideBar = document.createElement("div");
  sideBar.id = "sidebar";
  sideBar.append(
    ProjectListUI(State.getProjectsList()),
    addProjectBtn,
    newProjectUI
  );

  const main = document.createElement("div");
  main.id = "main";
  main.append(currTodoUI, addTodoButton, newTodoUI);

  return [header, sideBar, main];
}
