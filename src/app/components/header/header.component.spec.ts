import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [MatToolbarModule]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show that "FACTURAS" is active.', () => {
    const expectedColorActive = 'rgb(0, 0, 0)';

    const titleElement = fixture.nativeElement.querySelector('.header__item.active');
    const computedStyles = window.getComputedStyle(titleElement);
    const color = computedStyles.color;

    expect(color).toBe(expectedColorActive);
  });

  it('should show the title of "FACTURAS" ', () => {
    const expectedTitle = 'FACTURAS';

    const titleElement = fixture.nativeElement.querySelector('.header__item.active');
    const actualTitle = titleElement.textContent;
    expect(actualTitle).toContain(expectedTitle);
  });

  it('should show the logo correctly', () => {
    const logo = fixture.nativeElement.querySelector('img');
    const altText = logo.getAttribute('alt');
      expect(altText).toBeDefined();
      expect(altText).not.toBe('');
  })
});

