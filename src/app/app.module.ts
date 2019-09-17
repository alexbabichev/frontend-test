
import { NgModule } from '@angular/core';
import {GalleryModule} from './modules/gallery/gallery.module';
import { BrowserModule } from '@angular/platform-browser';

import {CoreModule} from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GalleryModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
