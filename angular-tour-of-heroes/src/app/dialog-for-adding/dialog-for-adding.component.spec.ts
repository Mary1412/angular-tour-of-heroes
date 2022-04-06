import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogForAddingComponent } from './dialog-for-adding.component';

describe('DialogForAddingComponent', () => {
  let component: DialogForAddingComponent;
  let fixture: ComponentFixture<DialogForAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogForAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogForAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
