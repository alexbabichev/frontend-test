// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LightboxModule } from 'ngx-lightbox';
import { InfiniteScrollModule } from '../infinite-scroll/infinite-scroll.module';
import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    LightboxModule,
    InfiniteScrollModule
  ],
  declarations: [
    GalleryComponent
  ],
  exports: [
    GalleryComponent
  ]
})
export class GalleryModule {

}
