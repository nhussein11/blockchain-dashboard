import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangesComponentComponent } from './exchanges-component.component';

describe('ExchangesComponentComponent', () => {
  let component: ExchangesComponentComponent;
  let fixture: ComponentFixture<ExchangesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangesComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
