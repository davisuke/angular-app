import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
	public username;

  	constructor() { }

  	setUsername(name: string){
  		this.username = name;
  	}

  	getUsername(): string {
  		return this.username;
  	}

}
