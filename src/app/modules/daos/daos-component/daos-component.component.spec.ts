import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaosComponentComponent } from './daos-component.component';

describe('DaosComponentComponent', () => {
  let component: DaosComponentComponent;
  let fixture: ComponentFixture<DaosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
