import { MatModule } from './mat.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DetailComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatModule, //import des méthodes Material Angular
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent] // Composant BootStrap
})
export class AppModule { }







/* npm install bootstrap-css-only
ng add @angular/material

Dans style.scss
import des BootStrap
@import "../node_modules/@angular/material/prebuilt-themes/indigo-pink.css";
@import "../node_modules/bootstrap-css-only/css/bootstrap.min.css"; */
