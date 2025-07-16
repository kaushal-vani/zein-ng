import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'z-button',
  standalone: true,
  imports: [],
  templateUrl: './z-button.component.html',
  styleUrl: './z-button.component.scss'
})
export class ZButtonComponent {
  @Input() label: string = 'Button';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() color: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' = 'primary';
  @Input() variant: 'solid' | 'outline' | 'ghost' = 'solid';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() icon?: string; // optional icon class
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;

  @Output() clicked = new EventEmitter<Event>();

  handleClick(event: Event) {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }

  get classes() {
    return [
      'z-btn',
      `z-btn--${this.size}`,
      `z-btn--${this.color}`,
      `z-btn--${this.variant}`,
      this.fullWidth ? 'z-btn--block' : '',
      this.disabled ? 'z-btn--disabled' : '',
      this.loading ? 'z-btn--loading' : '',
    ].join(' ');
  }
}