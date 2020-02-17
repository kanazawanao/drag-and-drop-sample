import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskColumn } from '../models/task';

@Component({
  selector: 'app-task-column-edit-dailog',
  templateUrl: './task-column-edit-dailog.component.html',
  styleUrls: ['./task-column-edit-dailog.component.scss']
})
export class TaskColumnEditDailogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TaskColumnEditDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: TaskColumn
  ) { }

  ngOnInit() { }

  apply(): void {
    this.dialogRef.close(this.data);
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
