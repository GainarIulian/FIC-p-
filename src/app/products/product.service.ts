import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private requestUrl = 'api/products/products.json';

    constructor(private httpClient: HttpClient){

    }

    getProducts(): Observable<IProduct[]> {
        return this.httpClient.get<IProduct[]>(this.requestUrl).pipe(
                    tap(data => console.log('all: ' + JSON.stringify(data))),
                    catchError(this.handleError)
        );
    }

    getProductById(id: number): Observable<IProduct>{
        return this.getProducts().pipe(
            map((products: IProduct[]) => products.find(p => p.id === id) )
        )
    }

    handleError(handleError: HttpErrorResponse){
        let errorMessage = '';
        if(handleError.error instanceof ErrorEvent){
            errorMessage = 'An error occured: ${handleError.error.message}';
        } else {            
            errorMessage = 'Server return code: ${handleError.status}, error message is: ${handleError.error.message}';
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

}