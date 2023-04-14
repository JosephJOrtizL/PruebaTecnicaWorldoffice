import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitlersComponent } from './fitlers.component';

describe('FitlersComponent', () => {
  let component: FitlersComponent;
  let fixture: ComponentFixture<FitlersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FitlersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FitlersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
