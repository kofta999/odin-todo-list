export interface ITodo {
  name: string;
  description: string;
  dueDate: Date;
  priority?: number;
  completed?: boolean;
}

export class Todo implements ITodo {
  constructor(
    public name: string,
    public description: string,
    public dueDate: Date,
    public priority: number = 1,
    public completed: boolean = false
  ) {}

  markAsCompleted() {
    this.completed = true;
  }

  changePriority(newPriority: number) {
    this.priority = newPriority;
  }
}
