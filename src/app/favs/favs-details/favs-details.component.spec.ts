import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavsDetailsComponent } from './favs-details.component';

describe('FavsDetailsComponent', () => {
  let component: FavsDetailsComponent;
  let fixture: ComponentFixture<FavsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
