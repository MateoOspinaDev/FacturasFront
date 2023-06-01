export interface customerInvoice {
  codigoFactura: string;
  cliente: string;
  ciudad: string;
  nit: string;
  totalFactura: number;
  subTotal: number;
  iva: number;
  retencion: number;
  fechaCreacion: string;
  estado: string;
  pagada: boolean;
  fechaPago: string;
}
