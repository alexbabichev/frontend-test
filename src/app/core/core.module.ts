import {NgModule} from '@angular/core';
import {GalleryService } from './services/gallery.service'
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [],
  declarations: [],
  providers: [
    GalleryService
  ]
})
export class CoreModule {
}
