import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfinidadeFormComponent } from './afinidade-form.component';

describe('AfinidadeFormComponent', () => {
  let component: AfinidadeFormComponent;
  let fixture: ComponentFixture<AfinidadeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfinidadeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfinidadeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
