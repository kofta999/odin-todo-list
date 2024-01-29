import NewTodoUI from "./newTodoUI";

export default function AddTodoButton() {
  const newTodoUI = NewTodoUI();
  const addTodoButton = document.createElement("button");
  addTodoButton.id = "addTodo";
  addTodoButton.textContent = "Add Todo";
  addTodoButton.addEventListener("click", () => newTodoUI.showModal());

  return { addTodoButton, newTodoUI };
}
