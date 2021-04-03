import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {ContentComponent } from './components/adminlte/content/content.component';
import {FooterComponent } from './components/adminlte/footer/footer.component';
import { HeaderComponent } from './components/adminlte/header/header.component';
import { MenuComponent } from './components/adminlte/menu/menu.component';
import { SettigComponent } from './components/adminlte/settig/settig.component';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {InicioComponent} from './components/inicio/inicio.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'registro', component: SignUpComponent}
];
export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
