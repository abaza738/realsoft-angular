import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  constructor() {
  }

  ngOnInit(): void {
  }

}
