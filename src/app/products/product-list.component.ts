import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    productListTitle: string = "Product list"
    products: any[] = [
        {
            "id": 1,
            "name": "Garden cart",
            "code": "GDN-0023",
            "releaseDate": "02/03/2020",
            "descrpiton": "test Garden Cart",
            "price": 24.50,
            "rating": 3.1,
            "imageUrl": "assets/images/1068-200x300.jpg",
        },
        {
            "id": 2,
            "name": "Hammer",
            "code": "HMR-0031",
            "releaseDate": "03/03/2020",
            "descrpiton": "test Hammer",
            "price": 34.50,
            "rating": 4.1,
            "imageUrl": "assets/images/1072-200x300.jpg",
        }
    ];

    // Image
    btnRowImage: string = "Show image"
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    toggleImage() {
        this.showImage = !this.showImage;
    }
    // Filter
    listFilter: string = ''
}