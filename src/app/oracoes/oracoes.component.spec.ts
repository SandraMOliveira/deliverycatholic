import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracoesComponent } from './oracoes.component';

describe('OracoesComponent', () => {
  let component: OracoesComponent;
  let fixture: ComponentFixture<OracoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
