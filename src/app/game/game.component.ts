import { Component, OnInit } from '@angular/core';
import { Game } from 'app/game';
import { GamesDataService } from 'app/games-data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
	private name: string = '';
	private year: number = 0;

  	constructor(private route: ActivatedRoute, private gamesService: GamesDataService, private router: Router) { }

  	ngOnInit() {
  		var game: Game = this.gamesService.getGame(this.route.snapshot.params['name']);
  		if (game == undefined){
  			this.router.navigate(['mainpage']);
  		}
  		else
  		{
  			this.name = game.name;
  			this.year = game.year;
  		}
  	}

}
