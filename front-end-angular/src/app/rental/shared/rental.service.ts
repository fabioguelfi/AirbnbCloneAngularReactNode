import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class RentalService {
    private rentals: Rental[] = []

    constructor(private httpClient: HttpClient){

    }

      public getRentalById(rentalId: string): Observable<Rental> {
          return this.httpClient.get(`/api/v1/rentals/${rentalId}`)
          .pipe(map((rental: Rental) => rental));
      }

      public getRentals(): Observable<Rental[]> {
        return this.httpClient.get('/api/v1/rentals')
        .pipe(map((rentals: Rental[]) => rentals));
      }
}