import {Component, OnInit} from '@angular/core';
import {Assignment} from './assignment.model';
import {AssignmentsService} from '../shared/services/assignments.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  tittle = 'My Assignments Application';
  selectedAssignment: Assignment;
  addAssignmentVisible = false;
  assignments: Assignment[];

  constructor(private assignmentService: AssignmentsService) {
  }

  ngOnInit() {
    this.assignments = this.assignmentService.getAssignmets();
  }

  setSelected(assignment: Assignment) {
    this.selectedAssignment = assignment;
  }

  onSubmitted(isSubmitted: boolean) {
    this.selectedAssignment.submitted = isSubmitted;
  }

  showAddAssignments() {
    this.addAssignmentVisible = true;
    this.selectedAssignment = null;
  }

  addAssignment(newAssignment) {
    this.assignments.push(newAssignment);
    this.addAssignmentVisible = false;
  }
}
