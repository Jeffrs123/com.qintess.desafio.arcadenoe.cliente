import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExameDetailComponent } from './exame-detail.component';

describe('ExameDetailComponent', () => {
  let component: ExameDetailComponent;
  let fixture: ComponentFixture<ExameDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExameDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
