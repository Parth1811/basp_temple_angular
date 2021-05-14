import { APIService, FestivalEvent, CreateFestivalEventInput, UpdateFestivalEventInput, DeleteFestivalEventInput } from './../API.service';
import { CustomAdapter } from './specialevent';
import { slide_up } from './animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DateRangeType, IgxCalendarComponent } from "igniteui-angular";
import { NgbModal, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-special-dates',
  templateUrl: './special-dates.component.html',
  styleUrls: ['./special-dates.component.scss'],
  providers: [{ provide: NgbDateAdapter, useClass: CustomAdapter }],
  animations: [
    slide_up
  ]
})
export class SpecialDatesComponent implements OnInit {

  data: Date = new Date();
  events = [];
  event_dict = {};
  slide = true;
  db_data: FestivalEvent[] = [];
  @ViewChild("calendar", { static: true }) public calendar: IgxCalendarComponent;
  isSignedIn: boolean = false;

  constructor(private api: APIService, private modalService: NgbModal) {}

  ngOnInit() {
    this.calendar.onSelection.subscribe((e, pt = this) => {
      pt.onSelect(e);
    })

    this.api.ListFestivalEvents().then(event => {
      this.db_data = event.items;
      this.sort_db_data();

      let curr_dates: Array<Date> = [];
      this.event_dict = {};

      this.db_data.forEach((element: FestivalEvent ) => {
        let d = new Date(element.date);
        curr_dates.push(d);
        if (this.event_dict[d.toDateString()] == null) {
          this.event_dict[d.toDateString()] = [element];
        } else {
          this.event_dict[d.toDateString()].push(element);
        }
      });

      this.events = this.db_data;

      this.calendar.specialDates =[{
        type: DateRangeType.Specific,
        dateRange: curr_dates
      }]

    })

    Auth.currentAuthenticatedUser()
      .then(user => {
        this.isSignedIn = true;
      })
      .catch(() => {
        this.isSignedIn = false;
      });

  }

  open(content) {
    this.modalService.dismissAll();
    this.modalService.open(content);
  }

  onSelect(dates: Date) {
    this.events = this.event_dict[dates.toDateString()];
  }

  resetevent() {
    this.events = this.db_data;
  }

  addFormHandler(eventForm) {
    let val = eventForm.value;
    let event : CreateFestivalEventInput = {
      date: val.date,
      title: val.title,
      description: val.description,
      img_link: val.img_link
    }

    this.api.CreateFestivalEvent(event).then(event => {
      console.log('item created!');
    })
    .catch(e => {
        console.log('error creating specialEvent...', e);
    });

    this.modalService.dismissAll();
    eventForm.reset();
  }

  editFormHandler(eventForm, id){
    let val = eventForm.value;
    let festev: UpdateFestivalEventInput ={
      id: id,
      date: val.date,
      title: val.title,
      description: val.description,
      img_link: val.img_link
    }
    this.api.UpdateFestivalEvent(festev).then(event => {
      console.log('item Updated');
    })
      .catch(e => {
        console.log('error Updating specialEvent...', e);
      });;
    this.modalService.dismissAll();
  }

  deleteEvent(eventForm, ev: FestivalEvent){
    let val = eventForm.value;
    let festev: DeleteFestivalEventInput = {
      id: ev.id
    }
    this.api.DeleteFestivalEvent(festev).then(event => {
      console.log('item Deleted');
    })
      .catch(e => {
        console.log('error Deleting specialEvent...', e);
      });;
    this.modalService.dismissAll();
  }

  onSlide($event) {
    this.slide = !this.slide;
  }

  sort_db_data(){
    this.db_data = this.db_data.sort(function (a, b) {
      let x = new Date(a.date);
      let y = new Date(b.date);
      if (x > y) { return -1 };
      if (x < y) { return 1; };
      return 0;
    });
  }

  expandCard(preview){
    this.modalService.open(preview, { size: 'xl' });
  }

}
