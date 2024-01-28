import { Project } from ".";
import ProjectUI from "./projectUI";

export default function ProjectListUI(projects: Project[]) {
  const projectListDiv = document.createElement("div");
  projectListDiv.id = "projects";

  projects.forEach((project) => projectListDiv.appendChild(ProjectUI(project)));

  return projectListDiv;
}
