import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginateButtonComponent } from './paginate-button.component';

describe('PaginateButtonComponent', () => {
  let component: PaginateButtonComponent;
  let fixture: ComponentFixture<PaginateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginateButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
