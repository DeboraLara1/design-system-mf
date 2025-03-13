import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalnewclienteComponent } from './modalnewcliente.component';

describe('ModalnewclienteComponent', () => {
  let component: ModalnewclienteComponent;
  let fixture: ComponentFixture<ModalnewclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalnewclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalnewclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
