import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouteComponent } from './noute.component';

describe('NouteComponent', () => {
  let component: NouteComponent;
  let fixture: ComponentFixture<NouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
