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
      return '<a href='+params.value+' target="_blank">'+ params.value+'</a>'
  } },
    { field: 'active', sortable: true },
    { field: 'name', sortable: true },
    {field: 'dateOfBirth', sortable: true}
];

rowData = [
];
  constructor(private enrolService: EnrollServiceService) { }

  ngOnInit() {
    this.getEnrolless();
  }

  getEnrolless() {
    this.enrolService.getEnrolles().subscribe(data => {
      this.rowData = data;
    })
  }

}
