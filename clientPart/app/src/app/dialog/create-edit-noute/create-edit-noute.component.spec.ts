import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditNouteComponent } from './create-edit-noute.component';

describe('CreateEditNouteComponent', () => {
  let component: CreateEditNouteComponent;
  let fixture: ComponentFixture<CreateEditNouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEditNouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditNouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
