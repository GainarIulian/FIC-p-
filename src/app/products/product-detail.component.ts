import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  pageTitle: string = 'Product detail:'
  product: IProduct;

  onBack():void{
    this.router.navigate(['/products'])
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
  }

}
