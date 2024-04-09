import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: ()=> import('./auth/auth.module').then(module => module.AuthModule) },
  { path: 'calculator', loadChildren: ()=> import('./calculator/calculator.module').then( module=> module.CalculatorModule ) },
  { path: '**', redirectTo: 'auth' }, // Ruta por defecto y rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }