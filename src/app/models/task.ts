export class Task {
  id: number;
  title: string;
  description: string;
  constructor(id?: number, title?: string, description?: string) {
    this.id = id ? id : 0;
    this.title = title ? title : '';
    this.description = description ? description : '';
  }
}

export class TaskColumn {
  state: string;
  id: number;
  taskList: Task[];
  constructor(state?: string, id?: number, taskList?: Task[]) {
    this.state = state ? state : '';
    this.id = id ? id : 0;
    this.taskList = taskList ? taskList : [];
  }
}

export class TaskBoard {
  columnList: TaskColumn[];
  constructor(columnList?: TaskColumn[]) {
    this.columnList = columnList ? columnList : [];
  }
}
