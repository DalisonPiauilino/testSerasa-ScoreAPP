import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfinidadeComponent } from './afinidade.component';

describe('AfinidadeComponent', () => {
  let component: AfinidadeComponent;
  let fixture: ComponentFixture<AfinidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfinidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfinidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
