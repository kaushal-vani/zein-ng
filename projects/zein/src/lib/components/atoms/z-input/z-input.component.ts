import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InputShape, InputType, Size } from '../../../types';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'z-input',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './z-input.component.html',
  styleUrl: './z-input.component.scss'
})
export class ZInputComponent {

  @Input() error = '';
  @Input() icon = '';
  @Input() label = '';
  @Input() modelValue: string = '';
  @Input() placeholder = '';
  @Input() shape: InputShape = 'rounded';
  @Input() size: Size = 'md';
  @Input() type: InputType = 'text';

  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() readonly = false;

  @Output() blurredEvent = new EventEmitter<FocusEvent>();
  @Output() focusedEvent = new EventEmitter<FocusEvent>();
  @Output() modelValueChange = new EventEmitter<string>();

  focused = false;

  get classes(): string {
    return [
      'z-input',
      `z-input--${this.size}`,
      this.fullWidth ? 'z-input--full' : '',
      this.disabled ? 'z-input--disabled' : '',
      this.error ? 'z-input--error' : '',
      this.focused ? 'z-input--focused' : '',
      this.modelValue ? 'z-input--filled' : ''
    ]
      .filter(Boolean)
      .join(' ');
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.modelValue = input.value;
    this.modelValueChange.emit(this.modelValue);
  }

  onFocus(event: FocusEvent): void {
    this.focused = true;
    this.focusedEvent.emit(event);
  }

  onBlur(event: FocusEvent): void {
    this.focused = false;
    this.blurredEvent.emit(event);
  }
}