import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerrrComponent } from './bannerrr.component';

describe('BannerrrComponent', () => {
  let component: BannerrrComponent;
  let fixture: ComponentFixture<BannerrrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerrrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
