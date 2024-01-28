import { Project } from "./projects";

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
    this.projectsList.push(project);
  }

  static getProjectsList() {
    return this.projectsList;
  }
}
