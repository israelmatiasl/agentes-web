import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SedesService } from '../../../core/services/sedes.service';
import { Sede } from '../../../core/models';
import { FormFactory } from '../../../core/factories/form.factory';
import { Store } from '@ngrx/store';
import { AppState } from '../../../core/store/app.state';
import { AddSedeAction, EditSedeAction } from '../../../core/store/actions/sedes.action';

@Component({
  selector: 'app-agencias-add-edit',
  templateUrl: './agencias-add-edit.component.html',
  styleUrls: ['./agencias-add-edit.component.scss']
})
export class AgenciasAddEditComponent implements OnInit, FormFactory {

  public sedeId: string;
  public sedeForm: FormGroup;

  constructor(
    private _sedesService: SedesService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private store: Store<AppState>,
    private _route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.initializeForm();

    this._route.params.subscribe(param => {
      this.sedeId = param['id'];
      if (this.sedeId) {
        this.getSedeById(this.sedeId);
      }
    });
  }

  private getSedeById(sedeId: string) {
    this._sedesService.getById(sedeId).subscribe(sede => {
      this.setValuesToForm(sede);
    });
  }

  private initializeForm(): void {
    this.sedeForm = this._formBuilder.group({
      id            : new FormControl(null),
      agencia       : new FormControl(null, [Validators.required]),
      distrito      : new FormControl(null, [Validators.required]),
      provincia     : new FormControl(null, [Validators.required]),
      departamento  : new FormControl(null, [Validators.required]),
      direccion     : new FormControl(null, [Validators.required]),
      latitud       : new FormControl(null, [Validators.required]),
      longitud      : new FormControl(null, [Validators.required])
    });
  }

  private setValuesToForm(sede: Sede): void {
    this.sedeForm.setValue({
      id            : sede.id,
      agencia       : sede.agencia,
      distrito      : sede.distrito,
      provincia     : sede.provincia,
      departamento  : sede.departamento,
      direccion     : sede.direccion,
      latitud       : sede.latitud,
      longitud      : sede.longitud
    });
  }

  public onSubmit(): void {
    if (this.sedeForm.invalid) return;
    this.sedeForm.disable();

    let sede: Sede = this.sedeForm.value;

    if(this.sedeId) {
      this.store.dispatch(new EditSedeAction(sede));
    }
    else {
      this.store.dispatch(new AddSedeAction(sede));
    }

    this._router.navigate(['..']).then();
  }
}
