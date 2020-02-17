import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskColumnEditDailogComponent } from './task-column-edit-dailog.component';

describe('TaskColumnEditDailogComponent', () => {
  let component: TaskColumnEditDailogComponent;
  let fixture: ComponentFixture<TaskColumnEditDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskColumnEditDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskColumnEditDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
