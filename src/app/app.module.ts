import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/adminlte/header/header.component';
import { MenuComponent } from './components/adminlte/menu/menu.component';
import { ContentComponent } from './components/adminlte/content/content.component';
import { FooterComponent } from './components/adminlte/footer/footer.component';
import { SettigComponent } from './components/adminlte/settig/settig.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SettigComponent,
    LoginComponent,
    SignUpComponent,
    InicioComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
