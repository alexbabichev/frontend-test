import { Component, Input } from '@angular/core';

@Component({
    selector: 'image',
    templateUrl: 'image.component.html',
    styleUrls: ['image.component.scss']
})
export class ImageComponent {
    @Input() imageData: any;
    imageLink: string;
    constructor(){
        console.log(this.imageData);
    }

    ngOnInit() {
        console.log('---',this.imageData);
        this.imageLink = `https://farm${this.imageData.farm}.staticflickr.com/${this.imageData.server}/${this.imageData.id}_${this.imageData.secret}.jpg`;
        console.log(this.imageLink);
    }
}
