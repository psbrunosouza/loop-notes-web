import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationComponent } from './iteration.component';

describe('IterationComponent', () => {
  let component: IterationComponent;
  let fixture: ComponentFixture<IterationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IterationComponent]
    });
    fixture = TestBed.createComponent(IterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
