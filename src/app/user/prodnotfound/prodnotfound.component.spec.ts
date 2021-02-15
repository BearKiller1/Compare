import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdnotfoundComponent } from './prodnotfound.component';

describe('ProdnotfoundComponent', () => {
  let component: ProdnotfoundComponent;
  let fixture: ComponentFixture<ProdnotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdnotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdnotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
