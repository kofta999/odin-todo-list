import NewProjectUI from "./newProjectUI";

export default function AddProjectButton() {
  const newProjectUI = NewProjectUI();
  const addProjectBtn = document.createElement("button");
  addProjectBtn.id = "addProject";
  addProjectBtn.textContent = "Add Project";
  addProjectBtn.addEventListener("click", () => newProjectUI.showModal());

  return { newProjectUI, addProjectBtn };
}
