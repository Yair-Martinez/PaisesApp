import { Component, Input, OnInit } from '@angular/core';
import { IPais } from 'src/app/interfaces/pais.interface';

@Component({
  selector: 'Pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.scss']
})
export class PaisComponent implements OnInit {
  @Input() pais = {} as IPais;

  ngOnInit(): void {

  }

}
