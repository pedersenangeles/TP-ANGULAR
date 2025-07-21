import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AldinaAlfajores } from './aldina-alfajores/aldina-alfajores';
import { AldinaAbout } from './aldina-about/aldina-about';
import { SignUp } from './sign-up/sign-up';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'alfajores',
    pathMatch: 'full'
  },
  {
    path: 'alfajores',
    component: AldinaAlfajores
  },
  {
    path: 'about',
    component: AldinaAbout
  },
  {
    path:'sign-up',
    component: SignUp
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
