import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'products-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) {
    }

    errorMessage:string;

    productListTitle: string = "Product list"
    products: IProduct[] = [];

    // Image
    btnRowImage: string = "Show image";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    toggleImage() {
        this.showImage = !this.showImage;
    }
    // Filter
    listFilter: string = '';
    filteredProducts: IProduct[];

    get filterBy(): string {
        return this.listFilter;
    }

    set filterBy(filter: string) {
        this.listFilter = filter;
        this.filteredProducts = this.filterBy ? this.filterProducts(this.filterBy) : this.products;
    }

    filterProducts(filterBy: string): IProduct[] {
        return this.products.filter((product: IProduct) => product.name.toLocaleLowerCase().indexOf(filterBy.toLocaleLowerCase()) !== -1);
    }

    onRatingClicked(message: string): void {
        this.productListTitle = 'Product list ' + message
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: products => {
                this.products = products;                
                this.filteredProducts = this.products;
            }, 
            error: error => this.errorMessage = error          
         });
    }
}