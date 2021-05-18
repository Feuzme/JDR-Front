import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendaComponent } from './pages/agenda/agenda/agenda.component';

const routes: Routes = [
  {path:"calendar",component:AgendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
