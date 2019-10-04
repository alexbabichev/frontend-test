export interface FlickrResponse {
  photos: FlickrPhotos;
}

export interface FlickrPhotos {
  page: number;
  pages: number;
  photo: ImageData[];
}

export interface ImageData {
  id: string;
  owner: string;
  secret: string,
  server: string,
  farm: number;
  title: string;
  caption: string;
  src: string;
  thumb: string;
}