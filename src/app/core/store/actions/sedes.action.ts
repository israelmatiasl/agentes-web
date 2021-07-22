import { Action } from '@ngrx/store';
import { Sede } from '../../models';

export enum SedesActionTypes {
  LOAD_SEDES = '[SEDES] Load Sedes',
  LOAD_SEDES_SUCCESS = '[SEDES] Load Sedes Success',
  LOAD_SEDES_FAILURE = '[SEDES] Load Sedes Failure',
  GET_SEDES = '[SEDES] Get Sedes',
  GET_SEDES_SUCCESS = '[SEDES] Get Sedes Success',
  GET_SEDES_FAILURE = '[SEDES] Get Sedes Failure',
  ADD_ITEMS = '[SEDES] Add Item',
  ADD_ITEMS_SUCCESS = '[SEDES] Add Item Success',
  ADD_ITEMS_FAILURE = '[SEDES] Add Item Failure',
  EDIT_ITEMS = '[SEDES] Edit Item',
  EDIT_ITEMS_SUCCESS = '[SEDES] Edit Item Success',
  EDIT_ITEMS_FAILURE = '[SEDES] Edit Item Failure'
}

export class LoadSedesAction implements Action {
  readonly type = SedesActionTypes.LOAD_SEDES;
  constructor() { }
}

export class LoadSedesSuccessAction implements Action {
  readonly type = SedesActionTypes.LOAD_SEDES_SUCCESS;
  constructor(public payload: Array<Sede>) { }
}

export class LoadSedesErrorAction implements Action {
  readonly type = SedesActionTypes.LOAD_SEDES_FAILURE;
  constructor(public payload: Error) { }
}

export class GetSedesAction implements Action {
  readonly type = SedesActionTypes.GET_SEDES;
  constructor() { }
}

export class GetSedesSuccessAction implements Action {
  readonly type = SedesActionTypes.GET_SEDES_SUCCESS;
  constructor(public payload: Array<Sede>) { }
}

export class GetSedesErrorAction implements Action {
  readonly type = SedesActionTypes.GET_SEDES_FAILURE;
  constructor(public payload: Error) { }
}

export class AddSedeAction implements Action {
  readonly type = SedesActionTypes.ADD_ITEMS;
  constructor(public payload: Sede) { }
}

export class AddSedeSuccessAction implements Action {
  readonly type = SedesActionTypes.ADD_ITEMS_SUCCESS;
  constructor(public payload: Sede) { }
}

export class AddSedeErrorAction implements Action {
  readonly type = SedesActionTypes.ADD_ITEMS_FAILURE;
  constructor(public payload: Error) { }
}

export class EditSedeAction implements Action {
  readonly type = SedesActionTypes.EDIT_ITEMS;
  constructor(public payload: Sede) { }
}

export class EditSedeSuccessAction implements Action {
  readonly type = SedesActionTypes.EDIT_ITEMS_SUCCESS;
  constructor(public payload: Sede) { }
}

export class EditSedeErrorAction implements Action {
  readonly type = SedesActionTypes.EDIT_ITEMS_FAILURE;
  constructor(public payload: Error) { }
}

export type SedesAction =
  LoadSedesAction |
  LoadSedesSuccessAction |
  LoadSedesErrorAction |
  GetSedesAction |
  GetSedesSuccessAction |
  GetSedesErrorAction |
  AddSedeAction |
  AddSedeSuccessAction |
  AddSedeErrorAction |
  EditSedeAction |
  EditSedeSuccessAction |
  EditSedeErrorAction;
