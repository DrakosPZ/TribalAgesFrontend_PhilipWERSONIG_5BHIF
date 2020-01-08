import {EventAnswer} from './eventAnswer';

export class Event {
  identifier: string
  title: string;
  text: string;

  dateDayEarliest: number;
  dateMonthEarliest: number;
  dateYearEarliest: number;

  dateDayLatest: number;
  dateMonthLatest: number;
  dateYearLatest: number;

  answers: EventAnswer[] = EventAnswer.getDateTest(3);

  constructor(identifier: string, title: string, text: string, dateDayEarliest: number, dateMonthEarliest: number,
              dateYearEarliest: number, dateDayLatest: number, dateMonthLatest: number, dateYearLatest: number) {
    this.identifier = identifier;
    this.title = title;
    this.text = text;
    this.dateDayEarliest = dateDayEarliest;
    this.dateMonthEarliest = dateMonthEarliest;
    this.dateYearEarliest = dateYearEarliest;
    this.dateDayLatest = dateDayLatest;
    this.dateMonthLatest = dateMonthLatest;
    this.dateYearLatest = dateYearLatest;
  }
}
