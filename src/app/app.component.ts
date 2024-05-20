import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsuariosComponent } from './componente/usuarios/usuarios.component';
import { initFlowbite } from 'flowbite';
import { BuscaComponent } from "./componente/busca/busca.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, UsuariosComponent, BuscaComponent]
})
export class AppComponent implements OnInit{
  title = 'tabelas';

  ngOnInit(): void {
    initFlowbite();
  }
}
