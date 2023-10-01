import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { applyContrastColorByBackground } from '@arbol-org/resources';

type BackgroundSchema =
  | 'bg-primary'
  | 'bg-secondary'
  | 'bg-accent'
  | 'bg-info'
  | 'bg-warning'
  | 'bg-danger'
  | 'bg-success'
  | 'bg-dark'
  | 'bg-light'
  | 'bg-base';

type BorderSchema =
  | 'border-primary'
  | 'border-secondary'
  | 'border-accent'
  | 'border-info'
  | 'border-warning'
  | 'border-danger'
  | 'border-success'
  | 'border-dark'
  | 'border-light'
  | 'border-base';

type BorderRadiusSchema =
  | 'rounded-sm'
  | 'rounded-md'
  | 'rounded-lg'
  | 'rounded-xl'
  | 'rounded-2xl'
  | 'rounded-full'
  | 'rounded-none';

@Component({
  selector: 'mjs-card',
  standalone: true,
  imports: [CommonModule, CheckboxComponent],
  templateUrl: './mjs-card.component.html',
  styleUrls: ['./mjs-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCardComponent implements AfterViewInit {
  @Input() background: BackgroundSchema = 'bg-secondary';

  @Input() border: BorderSchema = 'border-secondary';

  @Input() borderRadius: BorderRadiusSchema = 'rounded-md';

  @ViewChild('card') card: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    applyContrastColorByBackground(this.card);
  }

  get backgroundClass(): string {
    return `${this.background}`;
  }

  get borderClass(): string {
    return `border-2 ${this.border}`;
  }

  get borderRadiusClass(): string {
    return `${this.borderRadius}`;
  }
}
