import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  teamsUrl: string = "http://localhost:3000/teams"
  constructor(private httpClient: HttpClient) { }

  addTeam(obj) {
    return this.httpClient.post<{ msg: string }>(this.teamsUrl, obj);
  }
  getAllTeams() {
    return this.httpClient.get<{ teamsTab: any }>(this.teamsUrl);
  }
  getTeamById(id) {
    return this.httpClient.get(`${this.teamsUrl}/${id}`);
  }
  updateTeam(obj) {
    return this.httpClient.put(`${this.teamsUrl}/${obj.id}`, obj);
  }
  deleteTeams(id) {
    return this.httpClient.delete<{  }>(`${this.teamsUrl}/${id}`);
  }
}

