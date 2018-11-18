import { NgModule } from '@angular/core';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ],
    imports: [],
    providers: [],
    exports: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ]
})
export class RentalModule {

}