import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLongComponent } from './button-long.component';

describe('ButtonLongComponent', () => {
  let component: ButtonLongComponent;
  let fixture: ComponentFixture<ButtonLongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonLongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
