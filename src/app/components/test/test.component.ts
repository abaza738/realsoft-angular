import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'sameer',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private service: NotesService) { }

  ngOnInit(): void {
  }

}
