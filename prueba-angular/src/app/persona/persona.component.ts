import { Component, OnInit } from '@angular/core';
import { Humano} from '../humano';
import {PersonaService} from '../persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  varHumano: Humano;

  humanos: Humano[];

  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.getPersonas();
  }

  getPersonas(): void {
    this.personaService.getHumanos().subscribe(humanosv => this.humanos = humanosv);
  }

  onSelect(humanoide: Humano): void {
    this.varHumano = humanoide;
  }

}
