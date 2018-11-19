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

  formatDateForUncompletedTask(date: Date): string {
    const now = moment();
    const timeUntil = moment.duration(now.diff(moment(date)));
    const humanizedTimeDiff = timeUntil.humanize()

    if(!this.isOverdue(date)) {
      if(humanizedTimeDiff === 'a day') {
        return 'tomorrow';
      }
      return 'in ' + humanizedTimeDiff;
    } else {
      return humanizedTimeDiff + ' ago';
    }
  }

  isOverdue(date: Date): boolean {
    return moment(date).isBefore(moment());
  }

}
