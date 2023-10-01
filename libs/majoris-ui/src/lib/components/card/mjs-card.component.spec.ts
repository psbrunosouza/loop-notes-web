import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MjsCardComponent } from './mjs-card.component';

describe('CardComponent', () => {
  let component: MjsCardComponent;
  let fixture: ComponentFixture<MjsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
