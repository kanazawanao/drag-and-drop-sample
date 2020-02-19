import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskColumn } from '../models/task';

@Component({
  selector: 'app-task-column-edit-dialog',
  templateUrl: './task-column-edit-dialog.component.html',
  styleUrls: ['./task-column-edit-dialog.component.scss']
})
export class TaskColumnEditDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TaskColumnEditDialogComponent>,
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
