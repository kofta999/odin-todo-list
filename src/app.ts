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
  const t1 = new Todo("t1", "t1", new Date());
  const t2 = new Todo("t2", "t2", new Date());

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

  return [
    ProjectListUI(State.getProjectsList()),
    TodoListUI([t1, t2], defaultProject),
    addProjectBtn,
    addTodoButton,
    newProjectUI,
    newTodoUI,
  ];
}
