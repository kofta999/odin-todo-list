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

  const defaultProject = new Project();
  const t1 = new Todo("Todo1", "description of todo 1", new Date(2024, 1, 15));
  const t2 = new Todo("Todo2", "description of todo 1", new Date(2024, 0, 13));

  defaultProject.addToList(t1);
  defaultProject.addToList(t2);

  State.addProjectToList(defaultProject);
  State.addProjectToList(new Project("zby"));

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

  return [sideBar, main];
}
