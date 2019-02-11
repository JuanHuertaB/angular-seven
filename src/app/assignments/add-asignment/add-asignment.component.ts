import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Assignment} from '../assignment.model';

@Component({
  selector: 'app-add-asignment',
  templateUrl: './add-asignment.component.html',
  styleUrls: ['./add-asignment.component.css']
})
export class AddAsignmentComponent implements OnInit {

  @Output() addNewAssignment = new EventEmitter();

  name: string;
  dueDate: Date;
  enabled = false;

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => {
      this.enabled = true;
    }, 2000);
  }

  onSubmit() {
    const assignment = new Assignment();
    assignment.name = this.name;
    assignment.dueDate = this.dueDate;
    assignment.submitted = false;
    this.addNewAssignment.emit(assignment);
  }
}
