import { Cliente } from './cliente';
import { Negozio } from './negozio';

export interface Reclamo {
  id?: string;
  dataApertura?: string;
  negozio?: Negozio;
  causale?: string;
  oggettoReclamo?: string;
  shopOnline?: boolean;
  regione?: string;
  provinciaTik?: string;
  customer?: Cliente;
  soddisfazione?: boolean;
  stato?: string;
  gestione?: string;
  polo?: string;
}
