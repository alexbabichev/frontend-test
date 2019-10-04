// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { LightboxModule } from 'ngx-lightbox';

import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
import { GalleryComponent } from './gallery.component';

@NgModule({
    imports: [
        CommonModule,
        LightboxModule
    ],
    declarations: [
        GalleryComponent,
        InfiniteScrollComponent
    ],
    exports: [
        GalleryComponent,
    ]
})
export class GalleryModule {

}
