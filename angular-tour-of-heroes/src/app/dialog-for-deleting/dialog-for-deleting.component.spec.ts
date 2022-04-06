import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForDeletingComponent } from './dialog-for-deleting.component';

describe('DialogForDeletingComponent', () => {
  let component: DialogForDeletingComponent;
  let fixture: ComponentFixture<DialogForDeletingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForDeletingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForDeletingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
