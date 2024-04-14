import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from 'src/app/model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit {


  constructor(private _products: ProductsService) { }

  arr!: Iproduct[]


  ngOnInit(): void {


    this._products.getallProducts()
      .subscribe(res => {
        console.log(res)
        this.arr = res

      })
  }




}
