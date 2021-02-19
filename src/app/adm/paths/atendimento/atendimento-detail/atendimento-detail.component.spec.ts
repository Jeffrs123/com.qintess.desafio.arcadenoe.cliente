import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoDetailComponent } from './atendimento-detail.component';

describe('AtendimentoDetailComponent', () => {
  let component: AtendimentoDetailComponent;
  let fixture: ComponentFixture<AtendimentoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendimentoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtendimentoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
