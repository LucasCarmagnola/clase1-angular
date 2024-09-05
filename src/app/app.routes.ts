import { Routes } from '@angular/router';
import { BindeosComponent } from './components/bindeos/bindeos.component';
//import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ErrorComponent } from './components/error/error.component';
import { EdadesComponent } from './components/edades/edades.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistroComponent } from './components/auth/registro/registro.component';


export const routes: Routes = [
    { path: "", redirectTo: "bienvenida", pathMatch: "full"},
    { path: "bienvenida", loadComponent: () => import('./components/bienvenido/bienvenido.component')
        .then((c)=>c.BienvenidoComponent)
    },
    // { 
    //     path: "login", 
    //     loadComponent: () => import('./components/auth/login/login.component')
    //     .then((component) => component.LoginComponent)
    // },
    { path: 'auth', component: AuthComponent, children: [
        { path: '', component: LoginComponent },
        { path: 'login', component: LoginComponent},
        { path: 'registro', component: RegistroComponent}
    ]}, 
    { path: 'bindeos', component: BindeosComponent},
    { path: 'edades', component: EdadesComponent},
    { path: 'error', component: ErrorComponent},
    { path: "**", component: ErrorComponent}
];
