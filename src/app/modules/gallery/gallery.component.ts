import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GalleryService } from 'src/app/core/services/gallery.service';

// const getImagesUrl = `services/rest/?method=flickr.photos.search&api_key=522c1f9009ca3609bcbaf08545f067ad&tags=${tag}&page=${page}&tag_mode=any&per_page=100&format=json&safe_search=1&nojsoncallback=1`;
// const baseUrl = 'https://api.flickr.com/';

@Component({
    selector: 'gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})
export class GalleryComponent {
    @Input() events: Observable<void>;
    private eventsSubscription: any;
    private gallery = [];


    constructor(private httpClient: HttpClient, private galleryService: GalleryService){}

    ngOnInit() {
        this.loadImageGallery('flower', 1);
        this.eventsSubscription = this.events.subscribe((searchValue) => this.loadImageGallery(searchValue, 1))
    }

    loadImageGallery(searchValue, page) {
        this.galleryService.getCalendarData(searchValue, page).subscribe(res => {
            this.gallery=res.photos.photo;
            console.log(this.gallery);
        });
    }


    ngOnDestroy() {
        this.eventsSubscription.unsubscribe()
    }

}
