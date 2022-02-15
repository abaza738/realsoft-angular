import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // Insert your name here!
  name: string = "";

  // These are some notes for you, use them well :)
  notes: any[] = [
    {
      title: "Learn About Angular Directives",
      description: `Find the directives reference here: 'https://angular.io/guide/built-in-directives'.<br />
      These are the built-in directives that Angular have provided for ease of use.`,
      type: 3
    },
    {
      title: "Pay The Gym Subscription",
      description: `The subscription is ending on February 12th.<br />Need to renew it before the 5th!`,
      type: 1
    },
    {
      title: "Cousins Meeting",
      description: "Meeting was arranged and scheduled on the 15th of February.",
      type: 2
    },
    {
      title: "Sprint 85 Planning",
      description: `Planning checklist:
      <ul>
      <li>Prepare material for new tasks.</li>
      <li>Arrange a meeting with the client.</li>
      <li>Make sure not to forget the HDMI cable!</li>
      </ul>`
    }
  ];

  constructor() { }
}
