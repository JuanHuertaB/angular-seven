import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Assignment} from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {

  @Input() passedAssignment: Assignment;
  @Output() changeAssignmentStatus = new EventEmitter<boolean>();
  isSubmitted: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isSubmitted = this.passedAssignment.submitted;
  }

  changeStatus(submitted: boolean) {
    this.changeAssignmentStatus.emit(submitted);
  }

}
