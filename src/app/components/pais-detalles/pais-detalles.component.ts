import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPais } from 'src/app/interfaces/pais.interface';
import { ApiService } from 'src/app/services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'Pais-detalles',
  templateUrl: './pais-detalles.component.html',
  styleUrls: ['./pais-detalles.component.scss']
})
export class PaisDetallesComponent implements OnInit {

  idPais: string = "";
  allPaises: IPais[] = [];
  pais = {} as IPais;
  lang: string = "";
  curr: string = "";

  show: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private location: Location) { }

  ngOnInit(): void {
    this.idPais = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.obtenerApi();
  }

  obtenerApi() {
    this.api.getApi().subscribe(response => {
      this.pais = response.find(elem => elem.alpha3Code === this.idPais)!;
      this.lang = this.pais.languages.map(lang => lang.name).join(", ");
      this.curr = this.pais.currencies?.map(cur => "(" + cur.code + ") " + cur.name).join(", ");
      this.show = true;
    })
  }

  goBack() {
    this.location.back();
  }

}
