import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationComponent } from './components/examination/examination.component';

const routes: Routes = [
  { path: '**', redirectTo: '/' },
  { path: '', component: ExaminationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
