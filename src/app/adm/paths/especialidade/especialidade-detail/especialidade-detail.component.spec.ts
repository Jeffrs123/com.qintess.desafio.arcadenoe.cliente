import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadeDetailComponent } from './especialidade-detail.component';

describe('EspecialidadeDetailComponent', () => {
  let component: EspecialidadeDetailComponent;
  let fixture: ComponentFixture<EspecialidadeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspecialidadeDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialidadeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
