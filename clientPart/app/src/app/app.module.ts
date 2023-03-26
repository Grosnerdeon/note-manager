import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { NoutesComponent } from './noutes/noutes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BarComponent } from './bar/bar.component';
import { CreateEditNouteComponent } from './dialog/create-edit-noute/create-edit-noute.component';
import { RouterModule } from '@angular/router';
import { NouteComponent } from './noute/noute/noute.component';

@NgModule({
  declarations: [
    AppComponent,
    NoutesComponent,
    CreateEditNouteComponent,
    BarComponent,
    NouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule.forRoot([{
      path: '', component: NoutesComponent, 
    }, {
      path: ':nouteId', component: NouteComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
