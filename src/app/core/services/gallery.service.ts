import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1'
  })
};

@Injectable()
export class GalleryService {
  private baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.flickr.com/';
  private requestString = '';

  constructor(private http:HttpClient){}
  
  getData(searchValue: string, page: number): Observable<any> {
    const getImagesUrl = `services/rest/?method=flickr.photos.search&api_key=f33f238800a5534d5888d913ace69ca7&tags=${searchValue}&page=${page}&tag_mode=any&per_page=100&format=json&safe_search=1&nojsoncallback=1`;

    return this.http.get<any>(this.baseUrl+getImagesUrl, httpOptions);
  }

  getImageLink(imageData) {
    return `https://farm${imageData.farm}.staticflickr.com/${imageData.server}/${imageData.id}_${imageData.secret}.jpg`;
  }
}