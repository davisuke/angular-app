import { Injectable } from '@angular/core';
import { User } from 'app/User';
import { Comment } from 'app/Comment';

@Injectable()
export class UsersDataServiceService {

	private users: User[] = 
	[
		{name: 'user1', password: 'password1', birthdate: '07/11/1996', comments: [{user: 'admin', comment: 'comment 2', date: "Thu Feb 15 2018 07:50:36 GMT+0100"}]},
		{name: 'admin', password: 'admin', birthdate: '01/10/1996', comments: [{user: 'user1', comment: 'comment 1', date: "Thu Feb 15 2018 07:50:36 GMT+0100"}]}
	];


	constructor() {
	}

	getUsers(): User[] {
		return this.users; 
	}

	getUser(name: string): User {
		return this.users.find(x => x.name == name);
	}

	saveComment(comment: Comment, username: string){
		for (var i = 0; i< this.users.length; i++){
  			if (username == this.users[i].name){
        		this.users[i].comments.push(comment);
        		break;
  			}
  		}
	}
}
