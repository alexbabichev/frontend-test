import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Lightbox } from 'ngx-lightbox';

import { GalleryService } from 'src/app/core/services/gallery.service';
import { ImageData } from 'src/app/core/services/interface';


@Component({
  selector: 'gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['gallery.component.scss']
})
export class GalleryComponent {
  @Input() events: Observable<void>;

  private eventsSubscription: Subscription;
  private gallery: ImageData[] = [];
  private page = 0;

  public isLoading = false;

  constructor(private galleryService: GalleryService, private lightbox: Lightbox) { }

  ngOnInit() {
    this.onSearchValueChanged();
  }

  loadImageGallery(searchValue: string, page: number) {
    this.isLoading = true;
    this.galleryService.getData(searchValue, page)
      .subscribe((res: ImageData[]) => {
        // this.gallery = this.gallery.concat(res);

        this.gallery = res;
        this.isLoading = false;
      });
  }

  openLightbox(index: number) {
    this.lightbox.open(this.gallery, index);
  }

  onScroll() {
    this.page++;
    this.loadImageGallery('flower', this.page);
  }

  onSearchValueChanged() {
    this.eventsSubscription = this.events
      .subscribe((searchValue) => {
        this.gallery = [];
        this.page = 1;
        this.loadImageGallery(searchValue + '', this.page);
      });
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
