import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string = "http://localhost:3000/matches"
  constructor(private httpClient: HttpClient) { }
  //methode du services pour envoyer l'obj tape l'utilisateur a la partie backend
  addMatch(obj) {
    return this.httpClient.post<{ msg: any }>(this.matchUrl, obj);
  }
  //request=recupere tous le tableau d'objet
  getAllMatches() {
    return this.httpClient.get<{ hereAllMatches: any, msg: any }>(this.matchUrl);
  }
  //request=recupere un seul objet by id
  getMatchById(id) {
    return this.httpClient.get<{ findedMattch: any }>(`${this.matchUrl}/${id}`);
  }
  //request=modifier un objet
  updateMatch(obj) {
    return this.httpClient.put<{ msg: any }>(this.matchUrl, obj);
  }
  //request=supprimer un objet
  deleteMatch(id) {
    return this.httpClient.delete<{ message: any }>(`${this.matchUrl}/${id}`);
  }

  searchMatch(obj) {
    return this.httpClient.post(`${this.matchUrl}/search`, obj);

  }

}
