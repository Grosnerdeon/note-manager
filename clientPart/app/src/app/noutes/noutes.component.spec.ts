import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoutesComponent } from './noutes.component';

describe('NoutesComponent', () => {
  let component: NoutesComponent;
  let fixture: ComponentFixture<NoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
