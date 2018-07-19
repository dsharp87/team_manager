import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  players:object[];
  gamenumber:number;
  playerschange:BehaviorSubject<object[]>;
  gamenumchange:BehaviorSubject<number>;

  constructor(private _http:Http) {
    this.players = [];
    this.gamenumber = 1;
    this.playerschange = new BehaviorSubject([]);
    this.gamenumchange = new BehaviorSubject(1);
    this.getplayers()
    console.log(this.players, "after function")
   }

  addplayer(player, callback) {
    console.log(player, "addplayer service");
    this._http.post('/addplayer', player).subscribe( (res) => { 
      console.log(res.json(), 'service addplayer callback');
      this.players.push(res.json().player)
      this.playerschange.next(this.players);
      callback(res.json());
    })
  }

  getplayers() {
    console.log("getplayers service");
    this._http.get('/getplayers').subscribe( (res) => {
      console.log(res.json().players, 'service getplayers callback')
      this.players = res.json().players
      this.playerschange.next(this.players);    
    })
  }

  deleteplayer(id, callback) {
    console.log(id, 'service delete player');
    this._http.post(`/deleteplayer/${id}`, '').subscribe( (res) => {   //post request require a 2nd parameter, which is usually req.body, but since this wasn't a form, we gave it an empty string
      console.log(res.json(), 'service delete player callack');
      let idx = this.players.findIndex( function (player){
        // return false;
        return player._id == id
      })
      console.log(idx);
      this.players.splice(idx,1)
      this.playerschange.next(this.players)
      // callback(res.json());                 these are not needed unless redirect is happning, as we use behavior subject to update component information
    })
  }

  updatestatus(button, id, callback) {
    console.log(button, id, 'service update status');
    this._http.post(`/updatestatus/${this.gamenumber}/${button}/${id}`, '').subscribe( (res)=> {
      console.log(res.json(), 'service updatestatus callback');
      let idx = this.players.findIndex( function (player){
        // return false;
        return player._id == id;
      });
      console.log(idx);
      this.players[idx] = res.json();
      this.playerschange.next(this.players);
      // callback(res.json())                    these are not needed unless redirect is happning, as we use behavior subject to update component information
    })
  }

  setgamenumber(gamenumber) {
    console.log(gamenumber, 'service gamenumber setter');
    this.gamenumber = gamenumber;
    this.gamenumchange.next(this.gamenumber);
  }

  ngOnInit() {
       
  }

}
