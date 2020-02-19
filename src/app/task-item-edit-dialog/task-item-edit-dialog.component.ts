import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-item-edit-dialog',
  templateUrl: './task-item-edit-dialog.component.html',
  styleUrls: ['./task-item-edit-dialog.component.scss']
})
export class TaskItemEditDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TaskItemEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: Task
  ) { }

  ngOnInit() {}

  apply(): void {
    this.dialogRef.close(this.data);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
