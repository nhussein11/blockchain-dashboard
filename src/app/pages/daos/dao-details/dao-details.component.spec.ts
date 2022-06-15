import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaoDetailsComponent } from './dao-details.component';

describe('DaoDetailsComponent', () => {
  let component: DaoDetailsComponent;
  let fixture: ComponentFixture<DaoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
