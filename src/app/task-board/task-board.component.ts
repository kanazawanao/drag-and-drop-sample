import { Component, OnInit } from '@angular/core';
import { moveItemInArray, CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { TaskBoard, TaskColumn, Task } from '../models/task';
import { MatDialog } from '@angular/material/dialog';
import { TaskItemEditDialogComponent } from '../task-item-edit-dialog/task-item-edit-dialog.component';

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
        state: 'やること',
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
        state: '実行中',
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
    this.board.columnList.push(new TaskColumn());
  }

  addTask(column: TaskColumn) {
    const dialogRef = this.dialog.open(TaskItemEditDialogComponent, {
      data: new Task(),
      disableClose: true
    });
    dialogRef.afterClosed()
      .subscribe(result => {
      if (result) {
        column.taskList.push(result);
      }
    });
  }
}
