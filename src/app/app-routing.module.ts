import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { PaisDetallesComponent } from './components/pais-detalles/pais-detalles.component';

const routes: Routes = [
  { path:'home', component: MainComponent },
  { path:'pais-detalles/:id', component: PaisDetallesComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
