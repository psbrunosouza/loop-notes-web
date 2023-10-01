import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MjsCardFooterComponent } from './mjs-card-footer.component';

describe('CardFooterComponent', () => {
  let component: MjsCardFooterComponent;
  let fixture: ComponentFixture<MjsCardFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MjsCardFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MjsCardFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
