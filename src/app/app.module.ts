import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppUserAdministratorComponent } from './app-user-administrator/app-user-administrator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { AppFormComponent } from './app-form/app-form.component';
import { AppCursosComponent } from './app-cursos/app-cursos.component';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    AppNavbarComponent,
    AppUserAdministratorComponent,
    AppFormComponent,
    AppCursosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
