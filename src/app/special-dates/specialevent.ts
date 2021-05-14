import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export interface SpecialEvent {
    date: string,
    description: string,
    img_link: string,
    title: string
}

@Injectable()
export class CustomAdapter extends NgbDateAdapter<string> {

    fromModel(value: string | null): NgbDateStruct | null {
        if (value) {
            let date = new Date(value);
            return {
                day: date.getDate(),
                month: date.getMonth() + 1,
                year: date.getFullYear()
            };
        }
        return null;
    }

    toModel(date: NgbDateStruct | null): string | null {
        if(date){
            let d = new Date(date.year, date.month - 1, date.day);
            return d.toDateString();
        }

        return null;
    }
}
