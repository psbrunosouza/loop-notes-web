import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationTasksComponent } from './iteration-tasks.component';

describe('IterationTasksComponent', () => {
  let component: IterationTasksComponent;
  let fixture: ComponentFixture<IterationTasksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IterationTasksComponent]
    });
    fixture = TestBed.createComponent(IterationTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
