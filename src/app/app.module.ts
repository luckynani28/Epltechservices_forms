import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupComponent } from './components/common/popup/popup.component';
import { ToasterComponent } from './components/common/toaster/toaster.component';
import { MapsComponent } from './components/common/maps/maps.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { AutheniationComponent } from './components/modules/autheniation/autheniation.component';
import { DynamicComponent } from './components/modules/dynamic/dynamic.component';
import { ErrorspageComponent } from './components/others/errorspage/errorspage.component';
import { ThemeComponent } from './components/others/theme/theme.component';

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    ToasterComponent,
    MapsComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    AutheniationComponent,
    DynamicComponent,
    ErrorspageComponent,
    ThemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
