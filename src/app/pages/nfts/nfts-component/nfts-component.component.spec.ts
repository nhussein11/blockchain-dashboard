import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsComponentComponent } from './nfts-component.component';

describe('NftsComponentComponent', () => {
  let component: NftsComponentComponent;
  let fixture: ComponentFixture<NftsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NftsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
