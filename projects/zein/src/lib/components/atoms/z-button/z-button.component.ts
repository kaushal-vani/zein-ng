import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'z-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './z-button.component.html',
  styleUrls: ['./z-button.component.scss'],
})
export class ZButtonComponent {
  @Input() label: string = 'Button';
  @Input() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'neutral' = 'primary';
  @Input() variant: 'solid' | 'outline' | 'ghost' | 'link' | 'flat' = 'solid';

  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;

  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';

  @Input() toggleable: boolean = false;
  @Input() toggledOn: boolean = false;

  @Input() ariaLabel?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Input() shape: 'rounded' | 'square' | 'pill' = 'rounded';
  @Input() iconOnly: boolean = false;
  @Input() customClass?: string;
  @Input() theme: 'light' | 'dark' | 'auto' = 'auto';

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