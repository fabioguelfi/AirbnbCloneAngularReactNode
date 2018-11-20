import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'upper'
})
export class UppercasePipe implements PipeTransform {
    public transform(value: string): string {
        const tranformedValue = value.toUpperCase();
        return tranformedValue;
    }
}