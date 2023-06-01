import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from "src/environment/environment";
import { customerInvoice } from '../models/customerInvoice'

@Injectable()
export class InvoicesService {
  constructor(private http: HttpClient) { }

  getData(): Observable<customerInvoice[]> {
    return this.http.get<customerInvoice[]>(environment.API_URL)
      .pipe(
        map(response => response)
      );
  }
}
