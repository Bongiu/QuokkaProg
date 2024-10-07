import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoDettaglioComponent } from './nuovo-dettaglio.component';

describe('NuovoDettaglioComponent', () => {
  let component: NuovoDettaglioComponent;
  let fixture: ComponentFixture<NuovoDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuovoDettaglioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
