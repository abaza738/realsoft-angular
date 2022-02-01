import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes: any[] = [];

  constructor(private service: NotesService) { }

  ngOnInit(): void {
    this.notes = this.service.notes;
  }

}
