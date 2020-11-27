import { Component, OnInit } from '@angular/core';
import { EnrollServiceService } from '../enroll-service.service';

@Component({
  selector: 'app-enroll-management',
  templateUrl: './enroll-management.component.html',
  styleUrls: ['./enroll-management.component.scss']
})
export class EnrollManagementComponent implements OnInit {4
  
  enrollees: any;

  columnDefs = [
    { field: 'id',sortable: true, cellRenderer: function(params) {
      let val = params.value.substr(1, 10);
      return `<b><a href='${params.value}' class="badge badge-info">${val} <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cursor" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"/>
    </svg></a></b>`
  } },
    { field: 'active', sortable: true },
    { field: 'name', sortable: true },
    {field: 'dateOfBirth', sortable: true}
];

rowData = [
];
private rowClassRules;
  constructor(private enrolService: EnrollServiceService) {
    this.rowClassRules = {
      'active-true': function (params) {
        return params.data.active;
      },
      'active-false': function (params) {
        return !params.data.active;
      }
    };
   }

  ngOnInit() {
    this.getEnrolless();
  }

  getEnrolless() {
    this.enrolService.getEnrolles().subscribe(data => {
      this.rowData = data;
    })
  }

}
