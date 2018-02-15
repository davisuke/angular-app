import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersDataServiceService } from 'app/users-data-service.service';
import { User } from 'app/user';
import { Comment } from 'app/comment';
import { Game } from 'app/game';
import { Router } from '@angular/router';
import { DataService } from 'app/data.service';
import { GamesDataService } from 'app/games-data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	private name: string = '';
	private birthdate: string = '';
	private comments: Comment[] = [];
  private games: Game[] = [];
	private show: boolean = false;

  	constructor(private route: ActivatedRoute, private usersService: UsersDataServiceService, private router: Router, private dataService: DataService, private gamesService: GamesDataService) { }

  	ngOnInit() {
  		var user: User = this.usersService.getUser(this.route.snapshot.params['name']);
      console.log(user);
  		if (user == undefined){
  			this.router.navigate(['mainpage']);
  		}
  		else
  		{
  			this.name = user.name;
  			this.birthdate = user.birthdate;
  			this.comments = user.comments;
        this.games = this.gamesService.getGamesPlayedByUser(this.name);
  		}
  		if (this.dataService.getUsername() == this.name){
  			this.show = false;
  		}
  		else{
  			this.show = true;
  		}
  		
  	}

  	saveComment(e){
  		if (this.dataService.getUsername() == undefined){
  			alert("You have to log in before leave a comment");
  		}
  		else{
  			e.preventDefault();
  			var comment = {user: this.dataService.getUsername(), comment: e.target.elements[0].value, date: Date()};
  			this.usersService.saveComment(comment, this.name);
  			e.target.elements[0].value = '';
  		}
  		
  	}

}
