import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulateNavComponent } from './manipulate-nav.component';

describe('ManipulateNavComponent', () => {
  let component: ManipulateNavComponent;
  let fixture: ComponentFixture<ManipulateNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManipulateNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManipulateNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
