import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDComponent } from './add-d.component';

describe('AddDComponent', () => {
  let component: AddDComponent;
  let fixture: ComponentFixture<AddDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
