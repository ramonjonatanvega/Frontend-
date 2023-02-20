import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarrrComponent } from './navbarrr.component';

describe('NavbarrrComponent', () => {
  let component: NavbarrrComponent;
  let fixture: ComponentFixture<NavbarrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
