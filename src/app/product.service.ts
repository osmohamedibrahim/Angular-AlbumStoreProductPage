import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

@Injectable()
export class ProductService {
  _albumUrl = '../assets/album.json';
  _productsUrl = '../assets/products.json';
  constructor(private _http: Http) { }
  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).pipe(
      map(response => response.json())
    );
  }
  getProducts(): Observable<Product[]> {
    return this._http.get(this._productsUrl).pipe(
      map(response => response.json())
    )
  }
}
