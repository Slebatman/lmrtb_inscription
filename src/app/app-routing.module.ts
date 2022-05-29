import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './external-user/personal-information/personal-information.component';
import { WelcomeComponent } from './external-user/welcome/welcome.component';

const routes: Routes = [
  // External user
  { path : 'external/welcome', component : WelcomeComponent},
  { path : 'external/personal-information', component : PersonalInformationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
