import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MjsCardHeaderComponent } from './mjs-card-header.component';

describe('CardHeaderComponent', () => {
  let component: MjsCardHeaderComponent;
  let fixture: ComponentFixture<MjsCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsCardHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
