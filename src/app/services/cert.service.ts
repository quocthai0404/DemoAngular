import { Injectable } from '@angular/core';
import { Cert } from '../entities/cert.entity';


@Injectable({
  providedIn: 'root',
})
export class CertService {
  certs: Cert[];
  constructor() {
    this.certs = [
      { id: 1, name: 'cert 1' },
      { id: 2, name: 'cert 2' },
      { id: 3, name: 'cert 3' },
      { id: 4, name: 'cert 4' },
    ];
  }
  getCerts(): Cert[] {
    return this.certs;
  }
}