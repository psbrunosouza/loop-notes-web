import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ChangeDetectorRef } from '@angular/core';
import { By } from '@angular/platform-browser';

export async function runOnPushChangeDetection<T>(
  fixture: ComponentFixture<T>
): Promise<void> {
  const changeDetectorRef =
    fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
  changeDetectorRef.detectChanges();
  return fixture.whenStable();
}

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should button be created', () => {
    expect(component).toBeTruthy();
  });

  it('Should button contains text', () => {
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('.mjs__button');
    button.textContent = 'Button';
    fixture.detectChanges();
    expect(button.textContent).toContain('Button');
  });

  it('Should button emit event when clicked', () => {
    jest.spyOn(component, 'click');
    const button = fixture.nativeElement.querySelector('.mjs__button');
    button.click();
    fixture.detectChanges();
    expect(component.click).toHaveBeenCalled();
  });

  it('Should button be disabled', async () => {
    component.disabled = true;
    await runOnPushChangeDetection<ButtonComponent>(fixture);

    const buttonElement: HTMLButtonElement =
      fixture.nativeElement.querySelector('.mjs__button');
    expect(buttonElement.disabled).toBeTruthy();
  });

  it('Should button has a disabled style', async () => {
    component.disabled = true;
    await runOnPushChangeDetection<ButtonComponent>(fixture);

    const button = fixture.debugElement.query(By.css('.mjs__button'));
    const buttonDisabled = button.classes['mjs__button--disabled'];
    expect(buttonDisabled).toBeTruthy();
  });

  it('Should button has a loading state', async () => {
    component.loading = true;
    await runOnPushChangeDetection<ButtonComponent>(fixture);
    const button = fixture.nativeElement.querySelector('.mjs__button');
    expect(button.classList.contains('mjs__button--loading')).toBeTruthy();
  });

  it('Should button has a schema style', async () => {
    component.background = 'primary';
    await runOnPushChangeDetection<ButtonComponent>(fixture);

    const button = fixture.nativeElement.querySelector('.mjs__button');
    expect(button.classList.contains('mjs__button--primary')).toBeTruthy();

    component.background = 'secondary';
    await runOnPushChangeDetection<ButtonComponent>(fixture);
    expect(button.classList.contains('mjs__button--secondary')).toBeTruthy();

    component.background = 'accent';
    await runOnPushChangeDetection<ButtonComponent>(fixture);
    expect(button.classList.contains('mjs__button--accent')).toBeTruthy();
  });
});
