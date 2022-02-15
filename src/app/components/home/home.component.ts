import { Component, OnInit } from '@angular/core';
import * as packageJSON from '../../../../package.json';

const pack = packageJSON;
const GITHUB_REPO_URL = pack.repository.url;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openGithub() {
    window.open(GITHUB_REPO_URL, '_blank');
  }

}
