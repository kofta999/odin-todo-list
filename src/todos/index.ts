import "./styles.css";
type Priority = "low" | "medium" | "high";
export interface ITodo {
  name: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  completed: boolean;
}

export class Todo implements ITodo {
  constructor(
    public name: string,
    public description: string,
    public dueDate: Date,
    public priority: Priority = "low",
    public completed: boolean = false
  ) {}

  markAsCompleted() {
    this.completed = true;
  }

  changePriority(newPriority: Priority) {
    this.priority = newPriority;
  }
}
