import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResidencesComponentComponent } from './residences-component/residences-component.component';
import { ResidenceDetailsComponent } from './residence-details/residence-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { UpdateResidenceComponent } from './update-residence/update-residence.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponentComponent,
    ResidenceDetailsComponent,
    FormResidenceComponent,
    UpdateResidenceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
