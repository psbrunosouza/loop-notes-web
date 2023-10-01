import chroma from 'chroma-js';
import { ElementRef } from '@angular/core';

function getContrastingTextColor(
  backgroundColor: string
): 'text-content-dark' | 'text-content-light' {
  const luminance = chroma(backgroundColor).luminance();
  return luminance > 0.5 ? 'text-content-dark' : 'text-content-light';
}

export function applyContrastColorByBackground(element: ElementRef): void {
  const computedStyle: CSSStyleDeclaration = getComputedStyle(
    element.nativeElement
  );
  const backgroundColor: string = computedStyle.backgroundColor;
  const hexadecimalColor: string = chroma(backgroundColor).hex();
  element.nativeElement.classList.add(
    getContrastingTextColor(hexadecimalColor)
  );
}
