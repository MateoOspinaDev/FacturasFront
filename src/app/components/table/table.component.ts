import { Component } from '@angular/core';

import { customerInvoice } from '../../models/customerInvoice';
import { InvoicesService } from 'src/app/services/invoices.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  constructor(private getInvoicesService: InvoicesService) { }
  customerInvoices: customerInvoice[] = [];
  displayedColumns: string[] = [];
  status: 'loading' | 'success' | 'error' | 'init' = 'init';

  ngOnInit() {
    this.status = 'loading';
    this.getInvoicesService.getData()
      .subscribe({
        next: (data) => {
          this.customerInvoices = data;
          this.customerInvoices.forEach(invoice => {
            Object.keys(invoice).forEach(key => {
              if (!this.displayedColumns.includes(key)) {
                this.displayedColumns.push(key);
              }
            });
          });
          this.status = 'success';
        },
        error: (err) => {
          console.error(err);
          this.status = 'error';
        }
  });
  }

  isNumber(value: string | boolean | number): boolean {
    return typeof value === 'number' && !isNaN(value);
  }
}
