import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { JsopUsersService } from './jsop-users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [JsopUsersService]
})
export class AppComponent implements OnInit {
  data: any = {};
  displayedColumns: string[] = ['id', 'name', 'lat', 'lng', 'company'];
  listRecords = [{
    id: "1",
    name: "John Doe",
    lat: "-25.25852",
    lng: "36.3564",
    company: "XYZ LLC"
  }];
  telephone;
  userValue;

  dataSource = new MatTableDataSource(this.listRecords);
  error: boolean;


  constructor(private juService: JsopUsersService,
    private changeDetectorRefs: ChangeDetectorRef) {
      console.log(typeof this.dataSource);
      
  }

  ngOnInit(): void {
    this.getUserDetails(1);
    this.changeDetectorRefs.detectChanges();

  }

  getUserDetails(val: number) {
    this.juService.getUserDetails(val).subscribe(
      data => {
        this.data.id = data.id;
        this.data.name = data.name;
        this.data.lat = data.address.geo.lat;
        this.data.lng = data.address.geo.lng;
        this.data.company = data.company.name;
        this.listRecords = [];
        this.listRecords.push(this.data);
        this.dataSource.data = this.listRecords
      },
      err => {
        alert("Ooops, Nullpointer Exception #000123432" + err.status);
      }
    );
  }

  eventHandler(event) {
    let val = new String(event);
    if(val.length > 1) {
      this.error = true;
    } else {
      this.error = false;
    }
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  Phonecheck(event) {
    if(event < 19 || event.charAt(0) <= 1) {
      this.error = true;
    } else {
      this.error = false;
    }
  }
}
