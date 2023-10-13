import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mjs-card-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mjs-card-footer.component.html',
  styleUrls: ['./mjs-card-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCardFooterComponent {
  @Input() position: 'start' | 'end' | 'center' | 'between' = 'start';

  @Input() class = '';

  get positionClass(): string {
    return `position-class-${this.position}`;
  }
}
