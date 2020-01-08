import {Event} from './Event';
import {Injectable} from '@angular/core';
import {element} from 'protractor';
import {Ressources} from './ressources';
import {RessourcesHandlerService} from '../services/ressources-handler.service';

@Injectable({
  providedIn: 'root'
})
export class EventHandler {

  _toBeUsedEvents: Event[];
  _pendingEvents: Event[];
  _activeEvents: Event[];

  varibal: number;

  private ressourceHandler = new RessourcesHandlerService();

  constructor() {
    this._toBeUsedEvents = this.getRandomEvents();
    this._pendingEvents = this.getPickEvents(3);
    this._activeEvents = [];
    this._activeEvents.push(new Event('5', 'Test Active event', 'just wanna Know if this works', 1 ,
      1 , 0 , 1 , 3 , 1 ));
    // console.log('Active Events in Handler');
    // console.log(this._activeEvents);
  }

  /**
   * Generates Test Data
   */
  public getRandomEvents(): Event[] {
    const returnAnswers: Event[] = [];
    returnAnswers.push(new Event('1', 'Event 1', 'We got some Food', 1 ,
      1 , 0 , 1 , 3 , 1 ));
    returnAnswers.push(new Event('2', 'Event 2', 'We got some Food 2', 15 ,
      10 , 0 , 1 , 3 , 5 ));
    returnAnswers.push(new Event('3', 'Event 3', 'We got some Food 3', 1 ,
      1 , 0 , 1 , 3 , 10 ));
    returnAnswers.push(new Event('3', 'Event 4', 'We got some Food 4', 4 ,
      4 , 4 , 4 , 4 , 14 ));
    return returnAnswers;
  }

  /**
   * Adds a random event of the avialbe list to the be pickable List
   * @param size
   */
  public getPickEvents( size: number ): Event[] {
    const returnAnswers: Event[] = [];
    for (let i = 0; i < size; ++i) {
      returnAnswers.push(this._toBeUsedEvents[Math.floor(Math.random() * this._toBeUsedEvents.length)]);
    }
    return returnAnswers;
  }

  /**
   * Goes through the list of capable of picking events and checks for if they are picked
   * @param currentDay
   * @param currentMonth
   * @param currentYear
   * @constructor
   */
  public CheckForEventActivation(currentDay, currentMonth, currentYear) {
    // console.log('currentDay: ' + currentDay + '; currentMonth: ' + currentMonth + '; currentYear: ' + currentYear);
    return this.pendingEvents.forEach(
      event => {
        if (this.AssesIfEventTriggered(
          event.dateDayEarliest + event.dateMonthEarliest * 10 + event.dateYearEarliest * 100,
          event.dateDayLatest + event.dateMonthLatest * 10 + event.dateYearLatest * 100,
          currentDay + currentMonth * 10 + currentYear * 100)) {
          this._activeEvents.push(event);
          // console.log('Active Events: ');
          // console.log(this._activeEvents);
          this._pendingEvents = this._pendingEvents.filter(ListEvent => ListEvent !== event);
          // console.log('Pending Events: ');
          // console.log(this._pendingEvents);
        }
      }
    );
  }

  /**
   * Makes a Dice Throw and if the value is above the threshold, the event is activated (The closer the date is to the latest possible date
   * the more likely it is to be triggerd)
   * @param valueEarliestDate
   * @param valueLastDate
   * @param valueCurrentDate
   * @constructor
   */
  private AssesIfEventTriggered(valueEarliestDate, valueLastDate, valueCurrentDate): boolean {
    //console.log('ValueCurrentDate: ' + valueCurrentDate + '; valueEarliestDate: ' + valueEarliestDate);
    if (valueCurrentDate >= valueEarliestDate) {
      const diceThrow = Math.floor(Math.random() * 100);
      const borderValue = 100 - (valueCurrentDate / valueLastDate * 100);
      // console.log('Border Value: ' + borderValue);
      // console.log('Dice Throw: ' + diceThrow);
      if (diceThrow >= borderValue) {
        // console.log('Return: ' + true);
        return true;
      }
    }
    return false;
  }

  get toBeUsedEvents(): Event[] {
    return this._toBeUsedEvents;
  }

  get pendingEvents(): Event[] {
    return this._pendingEvents;
  }

  get activeEvents(): Event[] {
    return this._activeEvents;
  }

  /**
   * Upon Even answer clikced, gets the effects of the picked answers and calls the AddspecificRessource method
   * @param eventID
   * @param answerID
   * @param storage
   */
  public eventAnswerActivated(eventID, answerID, storage: Ressources) {
    let deletedEvent: Event;
    this._activeEvents.forEach( event => {
      if (event.identifier === eventID) {
        event.answers.forEach( answers => {
          if (answers.identifier === answerID) {
            this.ressourceHandler.AddspecificRessource(
              answers.resource, answers.amount, storage.ressources);
            deletedEvent = event;
          }
        });
      }
    });

    this._activeEvents = this._activeEvents.filter(ListEvent => ListEvent !== deletedEvent);

    return this._activeEvents;
  }
}
