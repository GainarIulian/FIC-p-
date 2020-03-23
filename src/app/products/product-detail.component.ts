import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private service: ProductService) {
  }

  pageTitle: string = 'Product detail:'
  errorMessage = '';
  product: IProduct;

  onBack():void{
    this.router.navigate(['/products'])
  }

  onRatingClicked(message: string): void {
      this.pageTitle =  'Product detail ' + message
  }

  geProduct(id: number): any {
    this.service.getProductById(id).subscribe({
      next: p => this.product = p,
      error: err => this.errorMessage = err
    });
  }

  ngOnInit(): void {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param;
      this.geProduct(id);
    }
  }
}
