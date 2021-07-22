import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { SedesService } from '../../services/sedes.service';
import { of } from 'rxjs';
import {
  AddSedeAction,
  AddSedeErrorAction,
  AddSedeSuccessAction, DeleteSedeAction, DeleteSedeErrorAction, DeleteSedeSuccessAction,
  EditSedeAction,
  EditSedeErrorAction,
  EditSedeSuccessAction,
  GetSedesAction,
  GetSedesErrorAction,
  GetSedesSuccessAction,
  LoadSedesAction,
  LoadSedesErrorAction,
  LoadSedesSuccessAction,
  SedesActionTypes
} from '../actions/sedes.action';

@Injectable()
export class SedesEffects {

  @Effect() loadSedes$ = this.actions$
    .pipe(
      ofType<LoadSedesAction>(SedesActionTypes.LOAD_SEDES),
      mergeMap(
        (data) => this._sedesService.loadData()
          .pipe(
            map(data => {
              return new LoadSedesSuccessAction(data)
            }),
            catchError(error => of(new LoadSedesErrorAction(error)))
          )
      ),
    );

  @Effect() getSedes$ = this.actions$
    .pipe(
      ofType<GetSedesAction>(SedesActionTypes.GET_SEDES),
      mergeMap(
        (data) => this._sedesService.getAll()
          .pipe(
            map(data => {
              return new GetSedesSuccessAction(data)
            }),
            catchError(error => of(new GetSedesErrorAction(error)))
          )
      ),
    );

  @Effect() addSede$ = this.actions$
    .pipe(
      ofType<AddSedeAction>(SedesActionTypes.ADD_ITEMS),
      mergeMap(
        (data) => this._sedesService.saveOne(data.payload)
          .pipe(
            map(data => {
              return new AddSedeSuccessAction(data)
            }),
            catchError(error => of(new AddSedeErrorAction(error)))
          )
      ),
    );

  @Effect() editSede$ = this.actions$
    .pipe(
      ofType<EditSedeAction>(SedesActionTypes.EDIT_ITEMS),
      mergeMap(
        (data) => this._sedesService.updateOne(data.payload)
          .pipe(
            map(data => {
              return new EditSedeSuccessAction(data)
            }),
            catchError(error => of(new EditSedeErrorAction(error)))
          )
      ),
    );

  @Effect() deleteSede$ = this.actions$
    .pipe(
      ofType<DeleteSedeAction>(SedesActionTypes.DELETE_ITEMS),
      mergeMap(
        (data) => this._sedesService.deleteOne(data.payload)
          .pipe(
            map(data => {
              return new DeleteSedeSuccessAction(data)
            }),
            catchError(error => of(new DeleteSedeErrorAction(error)))
          )
      ),
    );

  constructor(
    private actions$: Actions,
    private _sedesService: SedesService
  ) { }
}
