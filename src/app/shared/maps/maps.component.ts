import {Component, Input, OnInit} from '@angular/core';
import { NgbActiveModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import {Sede} from '../../core/models';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {

  @Input() public sede: Sede;

  constructor(
    public activeModal: NgbActiveModal,
    private config: NgbModalConfig
  ) {
    config.keyboard = false;
  }

  ngOnInit(): void {
  }
}
