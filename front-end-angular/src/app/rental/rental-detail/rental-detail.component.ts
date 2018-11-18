import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';
import { noop } from 'rxjs';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  public currentId: string;
  public rental: Rental;
  
  constructor(private activatedRoute: ActivatedRoute, private rentalService: RentalService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.currentId = params['rentalId'];
        this.getRental(this.currentId)
      }
    )
  }

  public getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId)
    .subscribe((rental) => this.rental = rental)
  }

}
