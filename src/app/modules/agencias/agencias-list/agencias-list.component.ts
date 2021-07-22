import { Component, OnInit } from '@angular/core';
import {combineLatest, Observable} from 'rxjs';
import { FormControl } from '@angular/forms';
import { Sede } from '../../../core/models';
import { SedesService } from '../../../core/services/sedes.service';
import { map, startWith } from 'rxjs/operators';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { MapsComponent } from '../../../shared/maps/maps.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { GetSedesAction } from '../../../core/store/actions/sedes.action';

@Component({
  selector: 'app-agencias-list',
  templateUrl: './agencias-list.component.html',
  styleUrls: ['./agencias-list.component.scss']
})
export class AgenciasListComponent implements OnInit {

  public sedes$: Observable<Sede[]>;
  public filterSedes: FormControl;
  private modalReference: NgbModalRef;

  constructor(
    private _sedesService: SedesService,
    private store: Store<AppState>,
    private _modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getSedes();
  }

  getSedes() {
    this.store.dispatch(new GetSedesAction());
    this.filterSedes = new FormControl('');

    this.sedes$ = combineLatest(
      this.filterSedes.valueChanges.pipe(startWith('')),
      this.store.select(state => state.sedes.list),
      (text, sedes) => ({ text, sedes })).pipe(
      map(({ text, sedes }) => {
        return this._sedesService.searchSedesByText(text, sedes);
      })
    );
  }

  openMap(sede: Sede) {
    this.modalReference = this._modalService.open(MapsComponent, { scrollable: true, size: 'md' });
    this.modalReference.componentInstance.sede = sede;
  }
}
