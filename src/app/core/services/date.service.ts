import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor() { }

  formatDateForUncompletedPopover(date: Date): string {
    return moment(date).format('dddd, MMM Do [by] h:mm a');
  }

  formatDateForCompletedTask(date: Date): string {
    return moment(date).format('MMMM Do');
  }

}
