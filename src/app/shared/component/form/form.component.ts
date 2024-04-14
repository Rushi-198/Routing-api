import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [ './form.component.scss' ]
})
export class FormComponent implements OnInit {

  constructor(private _products: ProductsService,
    private _router: Router,
    private _route: ActivatedRoute) { }


  productForm!: FormGroup

  productId!: string

  ngOnInit(): void {

    this.productForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required)
    })

    this.productId = this._route.snapshot.params[ 'pid' ]        //2 

    if (this.productId) {
      this.getProduct(this.productId)
    }

  }

  getProduct(id: string) {                        //3
    return this._products.getprd(id)
      .subscribe(res => {
        this.productForm.patchValue(res)
      })
  }


  onproductsubmit() {

    if (
      this.productForm.valid) {
      console.log(this.productForm.value)


      this._products.createproduct(this.productForm.value)
        .subscribe(res => {
          console.log(res)
          this._router.navigate([ '/products' ])
        })
    }

  }

  // patch
  Onupdate() {
    if (this.productForm.valid) {               //4
      console.log(this.productForm.value)
      this._products.updateproduct(this.productId, this.productForm.value)
        .subscribe(res => {
          console.log(res)

          //  this._router.navigate([ `/products/${this.productId}`, ])
          // this._router.navigate([ '/products', this.productId ])
          this._router.navigate([ '/products/' + this.productId ])
        })
    }
  }





}


// submit cha button vr click kalyr vr create hoto post call so submit 
// cha khalich post cha lihycha asto api

