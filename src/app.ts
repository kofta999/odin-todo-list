import { Todo } from "./todos";
import { Project } from "./projects";
import TodoListUI from "./todos/todoListUI";
import ProjectListUI from "./projects/projectListUI";
import NewProjectUI from "./projects/newProjectUI";
import NewTodoUI from "./todos/newTodoUI";
import { State } from "./state";

export default function App() {
  const newProjectUI = NewProjectUI();
  const newTodoUI = NewTodoUI();

  const header = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "Todos";
  header.id = "header";

  header.appendChild(title);

  const defaultProject = new Project();
  const t1 = new Todo("Todo1", new Date(2024, 1, 15));
  const t2 = new Todo("Todo2", new Date(2024, 0, 13));

  defaultProject.addToList(t1);
  defaultProject.addToList(t2);

  State.addProjectToList(defaultProject);
  State.addProjectToList(new Project("Project 2"));

  const addProjectBtn = document.createElement("button");
  addProjectBtn.id = "addProject";
  addProjectBtn.textContent = "Add Project";
  addProjectBtn.addEventListener("click", () => newProjectUI.showModal());

  const addTodoButton = document.createElement("button");
  addTodoButton.id = "addTodo";
  addTodoButton.textContent = "Add Todo";
  addTodoButton.addEventListener("click", () => newTodoUI.showModal());

  const sideBar = document.createElement("div");
  sideBar.id = "sidebar";
  sideBar.append(
    ProjectListUI(State.getProjectsList()),
    addProjectBtn,
    newProjectUI
  );

  const main = document.createElement("div");
  main.id = "main";
  main.append(TodoListUI([t1, t2], defaultProject), addTodoButton, newTodoUI);

  return [header, sideBar, main];
}
