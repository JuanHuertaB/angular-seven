import {Injectable} from '@angular/core';
import {Assignment} from '../../assignments/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  assignments: Assignment[] = [
    {
      name: 'One',
      dueDate: new Date('2018-02-07'),
      submitted: true
    },
    {
      name: 'Two',
      dueDate: new Date('2009/07/12'),
      submitted: false
    }
  ];

  constructor() {
  }

  getAssignmets(): Assignment[]{
    return this.assignments;
  }
}
