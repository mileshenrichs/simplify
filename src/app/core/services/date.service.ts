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
    const now = new moment();
    const timeUntil = moment.duration(now.diff(moment(date)));
    const humanizedTimeDiff = timeUntil.humanize()

    if(!this.isOverdue(date)) {
      return 'in ' + humanizedTimeDiff;
    } else {
      return humanizedTimeDiff + ' ago';
    }
  }

  isOverdue(date: Date): boolean {
    return moment(date).isBefore(moment());
  }

}
