import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeinComponent } from './zein.component';

describe('ZeinComponent', () => {
  let component: ZeinComponent;
  let fixture: ComponentFixture<ZeinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZeinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZeinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
