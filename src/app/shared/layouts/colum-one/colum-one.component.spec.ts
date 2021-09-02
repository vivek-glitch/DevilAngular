import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumOneComponent } from './colum-one.component';

describe('ColumOneComponent', () => {
  let component: ColumOneComponent;
  let fixture: ComponentFixture<ColumOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
