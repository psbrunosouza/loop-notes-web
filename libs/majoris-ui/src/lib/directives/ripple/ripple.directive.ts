import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mjsRipple]',
  standalone: true,
})
export class RippleDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    const ripple = this.renderer.createElement('span');
    const rect = this.el.nativeElement
      .querySelector('.ripple-parent')
      .getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    this.renderer.appendChild(
      this.el.nativeElement.querySelector('.ripple-parent'),
      ripple
    );

    setTimeout(() => {
      this.renderer.removeChild(
        this.el.nativeElement.querySelector('.ripple-parent'),
        ripple
      );
    }, 1000);
  }
}
