import { Cliente } from './cliente';

export interface Reclamo {
  id?: number;
  dataApertura?: string;
  codiceNegozio?: string;
  causale?: string;
  oggettoReclamo?: string;
  shopOnline?: boolean;
  regione?: string;
  provinciaTik?: string;
  customer?: Cliente;
}
