import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { UsersDataServiceService } from 'app/users-data-service.service';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from 'app/data.service';
import { UserComponent } from './user/user.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { GamesDataService } from './games-data.service';
import { ListElementsComponent } from './list-elements/list-elements.component';
import { GameComponent } from './game/game.component';
import { FilterPipe } from './filter.pipe';

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'users/:name',
    component: UserComponent
  },
  {
    path: 'games/:name',
    component: GameComponent
  },
  {
    path: 'mainpage',
    component: MainpageComponent
  },
  {
    path: 'list/:kind',
    component: ListElementsComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    MainpageComponent,
    UserComponent,
    NotfoundComponent,
    ListElementsComponent,
    GameComponent,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersDataServiceService,DataService,GamesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
