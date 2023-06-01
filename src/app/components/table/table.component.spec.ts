import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './table.component';
import { InvoicesService } from 'src/app/services/invoices.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { customerInvoice } from 'src/app/models/customerInvoice';
import { of, throwError } from 'rxjs';
import { CapitalizePipe } from 'src/app/pipe/capitalize.pipe';

fdescribe('TableComponent', () => {
  let component: TableComponent;
  let invoicesService: jasmine.SpyObj<InvoicesService>;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    const invoicesServiceSpy = jasmine.createSpyObj('InvoicesService', ['getData']);
    TestBed.configureTestingModule({
      declarations: [TableComponent,CapitalizePipe],
      imports: [MatTableModule, HttpClientTestingModule, MatProgressSpinnerModule,],
      providers: [{ provide: InvoicesService, useValue: invoicesServiceSpy }],
    });
  });

  beforeEach(() => {
    invoicesService = TestBed.inject(InvoicesService) as jasmine.SpyObj<InvoicesService>;
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;

    const mockData:customerInvoice[] = [
          {
            codigoFactura: "P-0003",
            cliente: "Mateo ",
            ciudad: "Tijuana",
            nit: "4327895-8",
            totalFactura: 19277,
            subTotal: 16200,
            iva: 3072,
            retencion: 0,
            fechaCreacion: "19/05/23 11:26",
            estado: "primerrecordatorio",
            pagada: true,
            fechaPago: "01/06/23",
          },
          {
            codigoFactura: "P-0004",
            cliente: "Mateo2 ",
            ciudad: "Tijuana",
            nit: "4327895-8",
            totalFactura: 19277,
            subTotal: 16200,
            iva: 3072,
            retencion: 0,
            fechaCreacion: "19/05/23 11:26",
            estado: "primerrecordatorio",
            pagada: true,
            fechaPago: "01/06/23",
          }
        ];

    invoicesService.getData.and.returnValue(of(mockData));

    fixture.detectChanges();
  });


  it('should create table component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the table', () => {
    const table = fixture.nativeElement.querySelector('table');
    expect(table).toBeTruthy();
  });

  it('should display spinner while loading', () => {
    component.status = 'loading';
    component.customerInvoices = [];
    fixture.detectChanges();

    const spinnerElement = fixture.nativeElement.querySelector('.container__spinner');
    const tableElement = fixture.nativeElement.querySelector('table');

    expect(spinnerElement).toBeDefined();
    expect(tableElement).toBeNull();
  });

  it('should display table when data is loaded successfully', () => {
  
    fixture.detectChanges();

    const spinnerElement = fixture.nativeElement.querySelector('.container__spinner');
    const tableElement = fixture.nativeElement.querySelector('table');

    expect(spinnerElement).toBeNull();
    expect(tableElement).toBeDefined();
  });

  it('should display table when there are no customer invoices', () => {
    const data: customerInvoice[] = [];
  
    invoicesService.getData.and.returnValue(of(data));
  
    fixture.detectChanges();
  
    const spinnerElement = fixture.nativeElement.querySelector('.container__spinner');
    const tableElement = fixture.nativeElement.querySelector('table');
  
    expect(spinnerElement).toBeNull();
    expect(tableElement).toBeDefined();
  });
  
  
  it('should apply "number" class to numeric cells', () => {
    fixture.detectChanges();
    const numberCellElements = fixture.nativeElement.querySelectorAll('.number');
    expect(numberCellElements.length).toBe(6);
  });
  
  it('should table have 12 columns if there are 2 customer invoices', () => {
    fixture.detectChanges();
    const headerRow = fixture.nativeElement.querySelector('thead tr');
    const cellElements = headerRow.querySelectorAll('th');
    expect(cellElements.length).toBe(12);
  });

  it('should table have 2 rows if there are 2 customer invoices', () => {
    fixture.detectChanges();
    const rowElements = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rowElements.length).toBe(2);
  });
});
