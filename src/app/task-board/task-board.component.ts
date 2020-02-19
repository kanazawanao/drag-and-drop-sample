import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskBoard, TaskColumn, Task } from '../models/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskItemEditDialogComponent } from '../task-item-edit-dialog/task-item-edit-dialog.component';
import { TaskColumnEditDialogComponent } from '../task-column-edit-dialog/task-column-edit-dialog.component';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  connectedTo: string[] = [];
  board: TaskBoard = {
    columnList: [
      {
        state: 'TODO',
        id: 1,
        taskList: [
          {
            id: 1,
            title: 'あああ',
            description: '',
          },
          {
            id: 2,
            title: 'test',
            description: '',
          },
        ],
      },
      {
        state: 'DOING',
        id: 2,
        taskList: [
          {
            id: 1,
            title: 'あああ',
            description: '',
          },
          {
            id: 2,
            title: 'test',
            description: '',
          },
        ],
      }
    ]
  };
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
    for (const column of this.board.columnList) {
      this.connectedTo.push(column.id.toString());
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(this.board);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  addColumn() {
    const dialogRef = this.dialog.open(TaskColumnEditDialogComponent, {
      data: new TaskColumn(),
      disableClose: true
    });
    dialogRef.afterClosed()
      .subscribe(result => {
      if (result) {
        result.id = this.board.columnList.length + 1;
        this.connectedTo.push(result.id.toString());
        this.board.columnList.push(result);
      }
    });
  }

  addTask(column: TaskColumn) {
    const dialogRef = this.dialog.open(TaskItemEditDialogComponent, {
      data: new Task(),
      disableClose: true
    });
    dialogRef.afterClosed()
      .subscribe(result => {
      if (result) {
        result.id = column.taskList.length + 1;
        column.taskList.push(result);
      }
    });
  }
}
