import { Component, DoCheck, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesDataService } from 'app/games-data.service';
import { UsersDataServiceService } from 'app/users-data-service.service';
import { Game } from 'app/game';
import { DataService } from 'app/data.service';
import { User } from 'app/user';

@Component({
  selector: 'app-list-elements',
  templateUrl: './list-elements.component.html',
  styleUrls: ['./list-elements.component.css']
})
export class ListElementsComponent {
	private items: any[];
  private users: User[];
  private receiver: string;
	private kind: string = '';

  	constructor(private route: ActivatedRoute, private gamesService: GamesDataService, private usersService: UsersDataServiceService,
    private dataService: DataService) { }

  	ngDoCheck(){
  		this.kind = this.route.snapshot.params['kind'];
  		if (this.kind == 'games'){
  			this.items = this.gamesService.getGames();
        this.users = this.usersService.getUsers();
  		}
  		if (this.kind == 'users'){
  			this.items = this.usersService.getUsers();
  		}
  	}

    shareGame(game: Game){
      var user: string = this.dataService.getUsername();
      if (user == undefined){
        alert("You must to be logged to share games!");
        return;
      }
      if (user == this.receiver){
        alert("You can't send games to yourself!");
      }
      else{
        if (game.players.find(x => x == user) !== undefined){
          this.gamesService.sendGame(user, this.receiver, game)
        }
        else
          alert("You don't have this game. You can't share it!");
      }
    }
}
