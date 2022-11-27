import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService) { }

  users:{
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;

}[] = [];
  ngOnInit(): void {
    this.users=this.userService.employees;
  }

}
