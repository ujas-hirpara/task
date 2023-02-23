import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjasComponent } from './ujas.component';

describe('UjasComponent', () => {
  let component: UjasComponent;
  let fixture: ComponentFixture<UjasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
