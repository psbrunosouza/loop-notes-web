import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mjs-card-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mjs-card-body.component.html',
  styleUrls: ['./mjs-card-body.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MjsCardBodyComponent {
  @Input() class: string;

  @Input() maxHeight: string;

  get maxHeightClass(): string {
    return `max-h-[${this.maxHeight}]`;
  }

  get overflowClass(): string {
    if (!this.maxHeight) return '';
    return `overflow-y-auto`;
  }
}
