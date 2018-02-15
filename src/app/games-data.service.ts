import { Injectable } from '@angular/core';
import { Game } from './game';

@Injectable()
export class GamesDataService {
	
	private games: Game[] = 
	[
		{name: "Max Payne", year: 2001, players: ["admin"]},
		{name: "Mario Galaxy", year: 2011, players: ["user1","admin"]}
	];

  	constructor() { }

  	getGames(): Game[] {
  		return this.games;
  	}

  	getGame(name: string): Game {
  		return this.games.find(x => x.name == name);
  	}

    getGamesPlayedByUser(user: string): Game[]{
      var usrgames: Game[] = [];
      for (var i = 0; i< this.games.length; i++){
        var usrs: string[] = this.games[i].players;
        if (usrs.find(x => x == user))
          usrgames.push(this.games[i]);
      }
      return usrgames;
    }

    sendGame(sender: string, receiver: string, game: Game){
      console.log(index); 
      console.log(sender);
      console.log(receiver);
      console.log(game);
      var index: number = this.games.indexOf(game);
      if ( index !== -1){
        var index2: number = this.games[index].players.indexOf(sender);
        this.games[index].players.splice(index2, 1);
        this.games[index].players.push(receiver);
      }

      console.log(this.games);
      
    }

}
