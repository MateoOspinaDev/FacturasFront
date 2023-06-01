import { TestBed } from '@angular/core/testing';
import { MaterialModule } from './components/material/material.module';
import { InvoicesService } from './services/invoices.service';


import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { HeaderComponent } from './components/header/header.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent, HeaderComponent],
    imports: [AppModule, MaterialModule],
    providers: [InvoicesService]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
