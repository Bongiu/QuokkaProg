import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioCardComponent } from './dettaglio-card.component';

describe('DettaglioCardComponent', () => {
  let component: DettaglioCardComponent;
  let fixture: ComponentFixture<DettaglioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DettaglioCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettaglioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
