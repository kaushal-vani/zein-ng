import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZInputComponent } from './z-input.component';

describe('ZInputComponent', () => {
  let component: ZInputComponent;
  let fixture: ComponentFixture<ZInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
