import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForExistingComponent } from './dialog-for-existing.component';

describe('DialogForExistingComponent', () => {
  let component: DialogForExistingComponent;
  let fixture: ComponentFixture<DialogForExistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForExistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForExistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
