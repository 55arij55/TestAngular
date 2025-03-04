import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

const routes:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  { path: 'residence-details/:id', component: ResidenceDetailsComponent },
  {path:"form-residence",component:FormResidenceComponent},
  {path:"update-residence/:id",component:UpdateResidenceComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
