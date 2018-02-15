import { Component, OnInit, DoCheck} from '@angular/core';
import { DataService } from 'app/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	show = false;
	username = 'Guest';

  constructor(private dataService: DataService) {
  		
  }

  ngOnInit() {
  		
  }

  ngDoCheck(){
  	var name = this.dataService.getUsername();
  	if (name == undefined){
  		this.show = true;
      this.username = 'Guest';
    }
  	else {
  		this.show = false;
  		this.username = name;
  	}
  }

  logOut() {
    this.dataService.setUsername(undefined);
  }

}
