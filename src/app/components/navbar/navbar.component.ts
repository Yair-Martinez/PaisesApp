import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  tema: string = localStorage.getItem('theme') === null ? 'light-theme' : localStorage.getItem('theme')!;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer:Renderer2) { }

  ngOnInit(): void {
    this.inicializarTema();
  }

  inicializarTema() {
    this.renderer.addClass(this.document.body, this.tema);
  }

  toggleTheme() {
    this.document.body.classList.replace(this.tema, this.tema === 'light-theme' ? (this.tema = 'dark-theme') : (this.tema = 'light-theme'));
    localStorage.setItem('theme', this.document.body.classList.value);
  }

}