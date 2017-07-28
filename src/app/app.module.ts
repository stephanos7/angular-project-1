import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DrinksComponent } from './components/drinks/drinks.component';
import { NewFormComponent } from './components/new-form/new-form.component';
import { SpiritComponent } from './components/spirit/spirit.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    NewFormComponent,
    SpiritComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
