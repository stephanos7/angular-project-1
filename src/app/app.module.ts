import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { NewFormComponent } from './components/new-form/new-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinksComponent,
    NewFormComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
