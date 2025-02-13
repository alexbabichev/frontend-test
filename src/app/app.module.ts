
import { NgModule } from '@angular/core';
import { GalleryModule } from './modules/gallery/gallery.module';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
// import { InfiniteScrollComponent } from './modules/infinite-scroll/infinite-scroll.component';

@NgModule({
  declarations: [
    AppComponent,
   //  InfiniteScrollComponent
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
