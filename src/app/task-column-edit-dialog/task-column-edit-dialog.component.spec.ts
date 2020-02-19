import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumnEditDialogComponent } from './task-column-edit-dialog.component';

describe('TaskColumnEditDialogComponent', () => {
  let component: TaskColumnEditDialogComponent;
  let fixture: ComponentFixture<TaskColumnEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskColumnEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskColumnEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
