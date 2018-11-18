import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RentalService {
    private rentals: any[] = [{
        id: 1,
        title: 'central apartament',
        city: 'new york',
        street: 'Times square',
        category: 'Apartament',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        description: 'very nive apartament',
        dayleRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      },
      {
        id: 2,
        title: 'central apartament 2',
        city: 'los angeles',
        street: 'Times square',
        category: 'Apartament',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        description: 'very nive apartament',
        dayleRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      },
      {
        id: 3,
        title: 'central apartament 3',
        city: 'north carolina',
        street: 'Times square',
        category: 'Apartament',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 3,
        description: 'very nive apartament',
        dayleRate: 34,
        shared: false,
        createdAt: '24/12/2017'
      }]

      public getRentals(): any[] {
          return this.rentals;
      }
}