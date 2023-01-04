import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RezultateComponent } from './rezultate.component';

describe('RezultateComponent', () => {
  let component: RezultateComponent;
  let fixture: ComponentFixture<RezultateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RezultateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RezultateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
