import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input('note') c: any;
  @Output() nameChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(value: any) {
    this.nameChange.emit(value);
  }

}
