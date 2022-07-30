import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { LoginComponent} from './components/login/login.component';
import { DoComponent} from './components/do/do.component';
const routes: Routes = [
  {path:"", redirectTo: "do", pathMatch:"full"},
  {path: "do", component: DoComponent},
  {path: "editar/:id", component: EditarComponent},
  {path: "agregar", component: AgregarComponent},
  {path: "login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
