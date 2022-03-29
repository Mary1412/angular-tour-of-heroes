import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDComponent } from './delete-d.component';

describe('DeleteDComponent', () => {
  let component: DeleteDComponent;
  let fixture: ComponentFixture<DeleteDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
