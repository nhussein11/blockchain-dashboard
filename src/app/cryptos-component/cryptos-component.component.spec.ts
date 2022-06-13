import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptosComponentComponent } from './cryptos-component.component';

describe('CryptosComponentComponent', () => {
  let component: CryptosComponentComponent;
  let fixture: ComponentFixture<CryptosComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptosComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CryptosComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
