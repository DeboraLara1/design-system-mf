import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaldeleteclienteComponent } from './modaldeletecliente.component';

describe('ModaldeleteclienteComponent', () => {
  let component: ModaldeleteclienteComponent;
  let fixture: ComponentFixture<ModaldeleteclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaldeleteclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaldeleteclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
