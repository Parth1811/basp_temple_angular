import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'linebreak' })
export class lbrPipe implements PipeTransform {
    transform(value: string): string {
        return value.replace(/\n/g, '<br />');
    }
}