import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { InvoicesService } from './invoices.service';
import { environment } from 'src/environment/environment';

describe('GetInvoicesService', () => {
  let service: InvoicesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InvoicesService]
    });
    service = TestBed.inject(InvoicesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return should be return information de invoices customer', () => {
    let expectedResponse =
    {
      codigoFactura: "P-0001",
      cliente: "Test 1",
      ciudad: "Medellín",
      nit: "123456-1",
      totalFactura: 19277,
      subTotal: 16200,
      iva: 3072,
      retencion: 0,
      fechaCreacion: "19/05/23 11:26",
      estado: "segundorecordatorio",
      pagada: false,
      fechaPago: "",
    };

    const responseObject = [{
      codigoFactura: "P-0001",
      cliente: "Test 1",
      ciudad: "Medellín",
      nit: "123456-1",
      totalFactura: 19277,
      subTotal: 16200,
      iva: 3072,
      retencion: 0,
      fechaCreacion: "19/05/23 11:26",
      estado: "segundorecordatorio",
      pagada: false,
      fechaPago: "",
    }];

    service.getData().subscribe((res) => {
      expect(res).toEqual([expectedResponse]);
    });

    const req = httpMock.expectOne(
      environment.API_URL
    );

    expect(req.request.method).toEqual('GET');
    req.flush(responseObject);
  });
});
