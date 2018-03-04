import { Component, OnInit, Input } from '@angular/core';
import {Humano} from '../humano';

@Component({
  selector: 'app-persona-detalle',
  templateUrl: './persona-detalle.component.html',
  styleUrls: ['./persona-detalle.component.css']
})
export class PersonaDetalleComponent implements OnInit {

  @Input() vaHumano: Humano;

  constructor() { }

  ngOnInit() {
  }

}
