import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannercarouselComponent } from './bannercarousel.component';

describe('BannercarouselComponent', () => {
  let component: BannercarouselComponent;
  let fixture: ComponentFixture<BannercarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannercarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannercarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
