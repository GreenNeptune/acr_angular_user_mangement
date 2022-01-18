import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService:UserService) { }

  listUsers$!: Observable<object>;
  users:any = []
  
  ngOnInit():void {
    // this.listUsers$ = this.userService.listUsers();
    this.userService.listUsers().subscribe(data => {this.users=data; console.log(data)});
  }

}
