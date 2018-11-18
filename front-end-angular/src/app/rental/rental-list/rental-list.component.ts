import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  public rentals: any[] = [{
    id: 1,
    title: 'central apartament',
    city: 'new york',
    street: 'Times square',
    category: 'Apartament',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 3,
    description: 'very nive apartament',
    daileRate: 34,
    shared: false,
    createdAt: '24/12/2017'
  },
  {
    id: 2,
    title: 'central apartament 2',
    city: 'new york',
    street: 'Times square',
    category: 'Apartament',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 3,
    description: 'very nive apartament',
    daileRate: 34,
    shared: false,
    createdAt: '24/12/2017'
  },
  {
    id: 3,
    title: 'central apartament 3',
    city: 'new york',
    street: 'Times square',
    category: 'Apartament',
    image: 'http://via.placeholder.com/350x250',
    bedrooms: 3,
    description: 'very nive apartament',
    daileRate: 34,
    shared: false,
    createdAt: '24/12/2017'
  }]

  constructor() { }

  ngOnInit() {
  }

}
