import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistDComponent } from './exist-d.component';

describe('ExistDComponent', () => {
  let component: ExistDComponent;
  let fixture: ComponentFixture<ExistDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExistDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
