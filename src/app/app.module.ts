import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { List1Component } from './list-1/list-1.component';
import { ContactCompoComponent } from './contact-compo/contact-compo.component';
import { WitchComponent } from './witch/witch.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateVaComponent } from './template-va/template-va.component';

@NgModule({
  declarations: [
    AppComponent,
    List1Component,
    ContactCompoComponent,
    WitchComponent,
    TemplateVaComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
