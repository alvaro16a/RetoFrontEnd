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
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ApiRestService } from './service/api-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { CarritoService } from './service/carrito/carrito.service';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'historial',component:HistorialComponent},
  {path:'carrito',component:CarritoComponent},
  {path:'agregar',component:AgregarProductoComponent},
  {path:'editar',component:ModificarProductoComponent},
  {path:'eliminar',component:ProductoComponent}
]

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
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ApiRestService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
