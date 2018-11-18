import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {

  @Input()
  public rental: any = {}
  
  constructor() { }

  ngOnInit() {
  }

}
