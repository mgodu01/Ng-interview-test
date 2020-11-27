import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnrollServiceService } from '../enroll-service.service';

@Component({
  selector: 'app-edit-enrollment',
  templateUrl: './edit-enrollment.component.html',
  styleUrls: ['./edit-enrollment.component.sass']
})
export class EditEnrollmentComponent implements OnInit {
  id: any;
  enrolee: any;
  edit: boolean;
  name;
  active;

  constructor(private enrollService: EnrollServiceService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getEnrolleById(this.id);
    });
  }

  getEnrolleById(id) {
    this.enrollService.getEnrolleById(id).subscribe(data => {
      this.enrolee = data;
    })
  }

  submitChanges() {
    this.enrollService.updateEnrollee(this.id, {
      name: this.name,
      active: this.active === 'true' ? true : false
    }).subscribe(data => {
      this.edit = false;
      this.enrolee.name = data.name;
      this.enrolee.active = data.active;
    })
  }
}
