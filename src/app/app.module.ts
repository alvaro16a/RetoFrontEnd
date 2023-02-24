import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HistorialComponent } from './component/historial/historial.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ProductoComponent } from './component/producto/producto.component';
import { AgregarProductoComponent } from './component/agregar-producto/agregar-producto.component';
import { ModificarProductoComponent } from './component/modificar-producto/modificar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistorialComponent,
    CarritoComponent,
    ProductoComponent,
    AgregarProductoComponent,
    ModificarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
