import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Lightbox } from 'ngx-lightbox';
import { GalleryService } from 'src/app/core/services/gallery.service';

@Component({
    selector: 'gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})
export class GalleryComponent {
    @Input() events: Observable<void>;

    private eventsSubscription: Subscription;
    private gallery = [];

    private page = 0;

    public isLoading = false;

    constructor(private galleryService: GalleryService, private lightbox: Lightbox) { }

    ngOnInit() {
        this.eventsSubscription = this.events
            .subscribe((searchValue) => this.loadImageGallery(searchValue, 1));
    }

    loadImageGallery(searchValue, page: number) {
        this.isLoading = true;
        this.galleryService.getData(searchValue, page)
            .subscribe(res => {
                const pageData = res.photos.photo
                    .map(imageData => {
                        return {
                            ...imageData,
                            src: this.galleryService.getImageLink(imageData),
                            caption: imageData.title,
                            thumb: this.galleryService.getImageLink(imageData).replace('.jpg', '_n.jpg')
                        }
                    });
                this.gallery = this.gallery.concat(pageData);
                this.isLoading = false;
            });
    }

    openLightbox(index: number) {
        this.lightbox.open(this.gallery, index);
    }

    onScroll() {
        this.page++;
        console.log('onScroll', this.page);
        this.loadImageGallery('flower', this.page);
    }

    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }

}
