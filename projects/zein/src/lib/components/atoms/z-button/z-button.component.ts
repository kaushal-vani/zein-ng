import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  ButtonShape,
  ButtonType,
  Color,
  IconPosition,
  Size,
  Theme,
  Variant,
} from '../../../types';

@Component({
  selector: 'z-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './z-button.component.html',
  styleUrls: ['./z-button.component.scss'],
})
export class ZButtonComponent {
  @Input() ariaLabel?: string;
  @Input() color: Color = 'primary';
  @Input() customClass?: string;
  @Input() icon?: string;
  @Input() iconPosition: IconPosition = 'left';
  @Input() label: string = 'Button';
  @Input() shape: ButtonShape = 'rounded';
  @Input() size: Size = 'md';
  @Input() theme: Theme = 'auto';
  @Input() type: ButtonType = 'button';
  @Input() variant: Variant = 'solid';

  @Input() disabled: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() iconOnly: boolean = false;
  @Input() loading: boolean = false;
  @Input() toggleable: boolean = false;
  @Input() toggledOn: boolean = false;

  @Output() clicked = new EventEmitter<Event>();
  @Output() focused = new EventEmitter<FocusEvent>();
  @Output() blurred = new EventEmitter<FocusEvent>();
  @Output() toggled = new EventEmitter<boolean>();

  handleClick(event: Event) {
    if (this.disabled || this.loading) return;

    this.clicked.emit(event);

    if (this.toggleable) {
      this.toggledOn = !this.toggledOn;
      this.toggled.emit(this.toggledOn);
    }
  }

  get classes(): string {
    return [
      'z-btn',
      `z-btn--${this.size}`,
      `z-btn--${this.color}`,
      `z-btn--${this.variant}`,
      `z-btn--shape-${this.shape}`,
      `z-btn--theme-${this.theme}`,
      this.iconOnly ? 'z-btn--icon-only' : '',
      this.fullWidth ? 'z-btn--block' : '',
      this.disabled ? 'z-btn--disabled' : '',
      this.loading ? 'z-btn--loading' : '',
      this.toggleable && this.toggledOn ? 'z-btn--toggled' : '',
      this.customClass || '',
    ]
      .filter(Boolean)
      .join(' ');
  }
}
