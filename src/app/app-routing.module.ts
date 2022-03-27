import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { VentaComponent } from './components/venta/venta.component';

const routes: Routes =[
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'venta',component: VentaComponent},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }