import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaCardComponent } from './nuova-card.component';

describe('NuovaCardComponent', () => {
  let component: NuovaCardComponent;
  let fixture: ComponentFixture<NuovaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuovaCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
