import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { IEmployee } from 'src/app/models/IEmployee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employee:IEmployee[]=[];
  public errorMessage!: string;
  constructor(private employeesService:EmployeesService) { }

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe((data) =>{
      this.employee = data;
    },(error) =>{
      this.errorMessage = error;
      console.log(error);
    }

    )

  }

}
