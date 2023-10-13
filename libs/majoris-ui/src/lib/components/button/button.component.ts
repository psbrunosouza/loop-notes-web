import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Color =
  | 'base'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'info'
  | 'danger'
  | 'light'
  | 'dark';

@Component({
  selector: 'mjs-button',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() disabled = false;

  @Input() loading = false;

  @Input() background: Color = 'secondary';

  // eslint-disable-next-line @angular-eslint/no-output-native
  @Output() click: EventEmitter<void> = new EventEmitter<void>();

  _click(): void {
    console.log('teste');
  }

  get disabledClass(): string {
    return `${this.disabled ? 'mjs__button--disabled' : ''}`;
  }

  get loadingClass(): string {
    return `${this.loading ? 'mjs__button--loading' : ''}`;
  }

  get backgroundClass(): string {
    return `mjs__button--${this.background}`;
  }

  get classes(): string {
    return `${this.disabledClass} ${this.loadingClass} ${this.backgroundClass}`;
  }
}
