import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  myProduct:any = {}
  private prodService = inject(ProductsService)

  private routeActive = inject(ActivatedRoute)

  constructor(){
    this.routeActive.params.subscribe((params: any) => {
      // console.log(params.id)
      this.myProduct = this.prodService.obtenerProducto(params.id)
    })

  }

}
