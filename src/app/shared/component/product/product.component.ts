import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [ './product.component.scss' ]
})
export class ProductComponent implements OnInit {

  constructor(
    private _route: ActivatedRoute,
    private _products: ProductsService,
    private _router: Router
  ) { }
  // productid !: number
  prodObj!: Iproduct

  ngOnInit(): void {

    console.log(this._route.snapshot.params[ 'pid' ], typeof this._route.snapshot.params[ 'pid' ])

    // this.productid = this._route.snapshot.params[ 'pid' ]

    this.getProduct(this._route.snapshot.params[ 'pid' ])
  }


  getProduct(id: string) {
    return this._products.getprd(id) //(this._route.snapshot.params[ 'pid' ]) ha pn asta id cha avggi
      .subscribe(res => {
        this.prodObj = res
      })
  }



  Ondelete(id: number) {
    return this._products.deleteproduct(id)
      .subscribe(res => {
        console.log(res)
        this._router.navigate([ '/products' ])
      })
  }


}
