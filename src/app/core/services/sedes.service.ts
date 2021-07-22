import { Injectable } from '@angular/core';
import { Sede } from '../models';
import agencias from '../../../assets/data/agencias.json';
import { of, Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { Constants } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class SedesService {

  storage: string = Constants.STORAGE_SEDES;

  constructor(private storageService: StorageService<Sede>) {}

  public loadData(): Observable<Sede[]> {
    return of(this.loadDataFromJson());
  }

  public getAll(): Observable<Sede[]> {
    return of(this.storageService.getAll(this.storage));
  }

  public getById(id: string): Observable<Sede> {
    return of(this.storageService.getOne(id, this.storage));
  }

  public saveOne(sede: Sede): Observable<Sede> {
    let _sede = new Sede();
    let _ = Object.assign(_sede, sede);
    return of(this.storageService.saveOne(_sede, this.storage));
  }

  public updateOne(sede: Sede): Observable<Sede> {
    let _sede = new Sede();
    let _ = Object.assign(_sede, sede)
    return of(this.storageService.updateOne(_sede, this.storage));
  }

  private loadDataFromJson(): Sede[] {
        const sedes = this.storageService.getAll(this.storage);
        if (sedes) return [];

        const sedesFromJson = agencias.map(p =>
          new Sede().buildFromData(p.agencia, p.distrito, p.provincia, p.departamento, p.direccion, p.lat, p.lon)
        );

        this.storageService.saveAll(sedesFromJson, this.storage);
        return [];
    }

  searchSedesByText(text: string, sedes: Sede[]): Sede[] {
      return sedes.filter(sede => {
        const term = text.toLowerCase();
        return sede?.agencia?.toLowerCase()?.includes(term)
          || sede?.distrito?.toLowerCase()?.includes(term)
          || sede?.provincia?.toLowerCase()?.includes(term)
          || sede?.departamento?.toLowerCase()?.includes(term)
          || sede?.direccion?.toLowerCase()?.includes(term);
      });
    }
}
