import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlatillosComponent } from './platillos/platillos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { OrdenesComponent } from './ordenes/ordenes.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { MeserosComponent } from './meseros/meseros.component';
import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'platillos', component: PlatillosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'ordenes', component: OrdenesComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'meseros', component: MeserosComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'login', component: LoginComponent },
];
