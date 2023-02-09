import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent {
  infoRequired1 : string[]=[];
  infoRequired2 : string[]=[];


  getInfoFrom1(){};
  getInfoFrom2(){};

}
