import { Component, OnInit } from '@angular/core';
import { SedesService } from './core/services/sedes.service';
import {Store} from '@ngrx/store';
import {AppState} from './core/store/app.state';
import {LoadSedesAction} from './core/store/actions/sedes.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading: boolean;

  constructor(private sedesService: SedesService, private store: Store<AppState>) {}

  ngOnInit(): void {
    this.onLoadingPage();
    //this.sedesService.loadData().subscribe();
    this.store.dispatch(new LoadSedesAction());
  }

  onLoadingPage() {
    this.loading = true;
    setTimeout(() => this.loading = false, 1500);
  }
}
