import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Iproduct } from 'src/app/model/products';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }


  getallProducts(): Observable<Iproduct[]> {
    // return this._http.get<Iproduct[]>(environment.producturl + '/products')
    return this._http.get<Iproduct[]>(`${environment.producturl}/products`)
      .pipe(
        map(res => res.reverse())
      )
  }


  // create prd

  createproduct(obj: Iproduct): Observable<Iproduct> {
    return this._http.post<Iproduct>(environment.producturl + '/products', obj)
  }


  // get single prd

  getprd(id: string): Observable<Iproduct> {
    let signleProdUrl = `${environment.producturl}/products/${id}`
    // return this._http.get<Iproduct>(environment.producturl + '/products/' + id)
    return this._http.get<Iproduct>(signleProdUrl)
  }


  // patch prd
  updateproduct(id: string, obj: Iproduct): Observable<Iproduct> {
    return this._http.patch<Iproduct>(`${environment.producturl}/products/${id}`, obj)
  }


  // delete prd

  deleteproduct(id: number): Observable<Iproduct> {
    return this._http.delete<Iproduct>(`${environment.producturl}/products/${id}`)
  }


}
