import { Component, OnInit } from '@angular/core';
import { UsersDataServiceService } from 'app/users-data-service.service';
import { User } from 'app/user';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  private users: User[];

  constructor(private usersService: UsersDataServiceService, private router: Router, 	private dataService: DataService) { }

  ngOnInit() {
  }

  loginUser(e){
  	e.preventDefault();
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
    var found: boolean = false;
  	this.users= this.usersService.getUsers();

  	for (var i = 0; i< this.users.length; i++){
  		if (username == this.users[i].name && password == this.users[i].password){
        found= true;
        break;
  		}
  	}
    
    if (found == true){
      console.log("Authenticated!");
      this.dataService.setUsername(username);
      alert("You are authenticated!");
      this.router.navigate(['mainpage']);
    }
    else
    {
      console.log("Failed: user not registered");
      alert("There's something wrong...");
    }
    
  }

}
