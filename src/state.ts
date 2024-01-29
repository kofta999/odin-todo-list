import { Project } from "./projects";
import { Todo } from "./todos";
import TodoListUI from "./todos/todoListUI";

export class State {
  private static activeButton: HTMLButtonElement | null;
  private static projectsList: Project[] = [];

  static getActiveButton() {
    return this.activeButton;
  }

  static setActiveButton(button: HTMLButtonElement) {
    this.activeButton = button;
  }

  static addProjectToList(project: Project) {
    const index = this.projectsList.findIndex((p) => p.name === project.name);
    if (index !== -1) {
      this.projectsList[index] = project;
    } else {
      this.projectsList.push(project);
    }
    localStorage.setItem("projectsList", JSON.stringify(this.projectsList));
  }

  static getProjectsList() {
    return this.projectsList;
  }

  static setProjectsList(projectsList: Project[]) {
    this.projectsList = projectsList;
  }

  static initState() {
    const local = localStorage.getItem("projectsList");
    const list = JSON.parse(local ?? "{}") as Project[] | null;
    if (list && list[0]) {
      const projects = list.map((project: Project) => {
        const todos = project.todos.map(
          (todo) =>
            new Todo(todo.name, todo.dueDate, todo.priority, todo.completed)
        );
        const proj = new Project(project.name, todos);
        this.addProjectToList(proj);
        return proj;
      });

      return TodoListUI(projects[0].todos, projects[0]);
    }

    const defaultProject = new Project();
    const t1 = new Todo("Todo1", new Date(2024, 1, 15));
    const t2 = new Todo("Todo2", new Date(2024, 0, 13));

    defaultProject.addToList(t1);
    defaultProject.addToList(t2);
    this.addProjectToList(defaultProject);

    return TodoListUI([t1, t2], defaultProject);
  }
}
