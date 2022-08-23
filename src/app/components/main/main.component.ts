import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IPais } from 'src/app/interfaces/pais.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'Main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  allPaises: Array<IPais> = [];
  paises: Array<IPais> = [];
  pais = {} as IPais;

  isLoading: boolean = false;
  spinnerColor: string = "primary"

  formBuscar = new FormGroup({
    buscador: new FormControl(''),
  })

  formFiltrar = new FormGroup({
    filtro: new FormControl(''),
  })

  constructor(@Inject(DOCUMENT) private document:Document, public api: ApiService) { }

  ngOnInit(): void {
    this.obtenerApi();
    this.toggleSpinnerColor();
  }

  obtenerApi() {
    this.isLoading = true;

    this.api.getApi().subscribe(response => {
      this.allPaises = response;
      this.paises = response;
      this.isLoading = false;
    })
  }

  buscarPais() {
    if (this.formBuscar.value.buscador) {
      if (this.formBuscar.value.buscador.length >= 2) {
        this.paises = this.allPaises.filter(item => item.name.toLowerCase().includes(this.formBuscar.value.buscador?.toLowerCase()!));
      } else {
        this.paises = this.allPaises;
      }
    }
  }

  filtrarRegion() {
    this.paises = this.allPaises.filter(item => item.region == this.formFiltrar.value.filtro);
  }

  toggleSpinnerColor() {
    this.spinnerColor = this.document.body.classList.contains("light-theme") ? "primary" : "accent";
  }

}
