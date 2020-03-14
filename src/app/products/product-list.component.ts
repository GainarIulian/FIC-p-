import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    constructor() {
        this.filteredProducts = this.products;
        this.filterBy = 'am';
    }

    productListTitle: string = "Product list"
    products: IProduct[] = [
        {
            "id": 1,
            "name": "Garden cart",
            "code": "GDN-0023",
            "releaseDate": "02/03/2020",
            "description": "test Garden Cart",
            "price": 24.50,
            "rating": 3.1,
            "imageUrl": "assets/images/1068-200x300.jpg",
        },
        {
            "id": 2,
            "name": "Hammer",
            "code": "HMR-0031",
            "releaseDate": "03/03/2020",
            "description": "test Hammer",
            "price": 34.50,
            "rating": 4.1,
            "imageUrl": "assets/images/1072-200x300.jpg",
        }
    ];

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

    onRatingClicked(message:string): void {
        this.productListTitle = 'Product list ' + message
    }

    ngOnInit(): void {
        console.log('Init');
    }
}