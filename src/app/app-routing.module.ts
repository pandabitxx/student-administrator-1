//Importacion modulos del router de angular 
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//Importar componentes 
import { AppUserAdministratorComponent } from './app-user-administrator/app-user-administrator.component';
import { AppFormComponent } from './app-form/app-form.component';


//Array de rutas
const routes: Routes = [
  {path: 'users', component: AppUserAdministratorComponent},
  {path: 'form', component: AppFormComponent},
  {path: '**', component:  AppUserAdministratorComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);






