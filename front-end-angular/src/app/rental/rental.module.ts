import { NgModule } from '@angular/core';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ]
})
export class RentalModule {

}