import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { EditTeamComponent } from './components/edit-team/edit-team.component';
import { HomeComponent } from './components/home/home.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchesComponent } from './components/matches/matches.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchInfoComponent } from './components/match-info/match-info.component';
import { SearchMatchComponent } from './components/search-match/search-match.component';
import { AddStaduimComponent } from './components/add-staduim/add-staduim.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { SearchScoreComponent } from './components/search-score/search-score.component';
import { WeatherComponent } from './components/weather/weather.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "signupAdmin", component: SignupComponent },
  { path: "matchForm", component: MatchFormComponent },
  { path: "playerForm", component: PlayerFormComponent },
  { path: "addPlayer", component: PlayerFormComponent },
  { path: "addTeam", component: AddTeamComponent },
  { path: "editTeam", component: EditTeamComponent },
  { path: "allMatches", component: MatchesComponent },
  { path: "allMatches/search", component: MatchesComponent },
  { path: "allPlayers", component: PlayersComponent },
  { path: "allTeams", component: TeamsComponent },
  { path: "admin", component: AdminComponent },
  { path: "matchInfo/:id", component: MatchInfoComponent },
  { path: "playerInfo/:id", component: PlayerInfoComponent },
  { path: "teamInfo/:id", component: TeamInfoComponent },
  { path: "addMatch", component: MatchFormComponent },
  { path: "editMatch/:id", component: MatchFormComponent },
  { path: "editPlayer/:id", component: PlayerFormComponent },
  { path: "search", component: SearchMatchComponent },
  { path: "addStaduim", component: AddStaduimComponent },
  { path: "editTeam/:id", component: AddTeamComponent },
  { path: "searchScore", component: SearchScoreComponent },
  { path: "weather", component: WeatherComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
