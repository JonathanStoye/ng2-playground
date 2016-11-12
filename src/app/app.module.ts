import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WishComponent } from './wish/wish.component';
import { WishService } from './services/wish.service';

@NgModule({
  declarations: [
    AppComponent,
    WishComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    WishService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
