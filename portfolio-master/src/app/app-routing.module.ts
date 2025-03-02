import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentazioneComponent } from './presentazione/presentazione.component';
import { ProgettiComponent } from './progetti/progetti.component';

const routes: Routes = [
  {
    path: '',
    component: PresentazioneComponent,
  },
  {
    path: 'progetti',
    component: ProgettiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
