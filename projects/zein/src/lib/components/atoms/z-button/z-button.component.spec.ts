import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZButtonComponent } from './z-button.component';

describe('ZButtonComponent', () => {
  let component: ZButtonComponent;
  let fixture: ComponentFixture<ZButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
