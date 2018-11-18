import { NgModule } from '@angular/core';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalComponent } from './rental.component';
import { CommonModule } from '@angular/common';
import { RentalService } from './shared/rental.service';
@NgModule({
    declarations: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        RentalService,
    ],
    exports: [
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent
    ]
})
export class RentalModule {

}