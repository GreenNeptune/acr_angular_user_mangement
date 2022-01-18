import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  
  userId:string = '';
  userDetails:any;
  // activate route for fetch data from the route 
  constructor(private userService:UserService,private activatedRoute:ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{ this.userId = params['id']}) 
    this.userService.viewUser(this.userId).subscribe(data => this.userDetails = data)
  }

}
