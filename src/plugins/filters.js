import Vue from 'vue';
import {
  format,
  differenceInCalendarYears,
  startOfToday,
  getYear,
} from 'date-fns';
import { enUS } from 'date-fns/locale';

Vue.filter('formatDate', function(value, dateFormat = 'dd.MMM.yy') {
  if (value) {
    return format(new Date(String(value)), dateFormat, { enUS });
  }
});
