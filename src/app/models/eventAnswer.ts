export class EventAnswer {
  identifier: string;
  text: string;
  resource: string;
  amount: number;

  constructor(identifier: string, text: string, resource: string, amount: number) {
    this.identifier = identifier;
    this.text = text;
    this.resource = resource;
    this.amount = amount;
  }

  public static getDateTest( size: number ): EventAnswer[] {
    const returnAnswers: EventAnswer[] = [];
    for (let i = 0; i < size; ++i) {
      returnAnswers.push(new EventAnswer(i + '', 'Wonderfull Answer Number ' + i, 'Food', i * 100 + i / 20 ));
    }
    return returnAnswers;
  }
}
