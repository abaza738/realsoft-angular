import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = true;
  currentUserName: string = this.notesService.name;

  routeIcons: any = {
    "home": {
      icon: "fa-solid fa-house",
      name: "Home"
    },
    "notes": {
      icon: "fa-solid fa-note-sticky",
      name: "Notes"
    },
    "weather": {
      icon: "fa-solid fa-cloud-sun",
      name: "Weather"
    }
  }

  constructor(public notesService: NotesService) {
  }

  ngOnInit(): void {
  }

}
