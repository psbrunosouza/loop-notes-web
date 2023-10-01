import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MjsCardBodyComponent } from './mjs-card-body.component';

describe('CardBodyComponent', () => {
  let component: MjsCardBodyComponent;
  let fixture: ComponentFixture<MjsCardBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MjsCardBodyComponent],
    });
    fixture = TestBed.createComponent(MjsCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
