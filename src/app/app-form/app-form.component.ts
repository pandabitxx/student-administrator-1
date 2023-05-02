import { Component, OnInit } from '@angular/core';
import { ContactoUsuario } from '../models/contacto.usuario';

@Component({
  selector: 'app-app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {
  public usuario: ContactoUsuario;

  constructor(){
    this.usuario = new ContactoUsuario('','','')
  }

  ngOnInit() {

  }

  onSubmit(){
    console.log('Evento submit lanzado!!');
    console.log(this.usuario);
  }
}

