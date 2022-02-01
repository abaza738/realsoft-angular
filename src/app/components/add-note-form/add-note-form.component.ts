import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/notes.service';

@Component({
  selector: 'app-add-note-form',
  templateUrl: './add-note-form.component.html',
  styleUrls: ['./add-note-form.component.css']
})
export class AddNoteFormComponent implements OnInit {

  // I added this "Form Group" as an example
  // You don't have to do anything, but it's good to know!
  // Let me know if you want a special session about forms.
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    type: new FormControl(null)
  });

  constructor(private service: NotesService) { }

  ngOnInit(): void {
  }

  onSubmit = () => {
    this.service.notes.push(this.addNoteForm.value);
    this.addNoteForm.reset();
  }

}
