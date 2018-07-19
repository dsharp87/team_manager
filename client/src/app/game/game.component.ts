import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  gamenumber:number;
  players:object[];

  constructor(private _dataservice:DataService, private _route:ActivatedRoute, private _router:Router) {
    this.players = [];
    this._route.paramMap.subscribe((params) => { 
      console.log(params.get('id'));
      this.gamenumber = parseInt(params.get('id'));
      this.setgamenumber(this.gamenumber);
    });
    
  }

  setgamenumber(gamenumber) {
    console.log(gamenumber, 'gamenumber setter component');
    this._dataservice.setgamenumber(gamenumber);
  }

  updatestatus(button, id) {
    console.log(button, id, 'update status component');
    this._dataservice.updatestatus(button, id, (data) => {
      console.log(data, "component updatedstatus callback")
    });
  }

  ngOnInit() {
    this._dataservice.gamenumchange.subscribe( (value) => {
      this.gamenumber = value;
    })

    this._dataservice.playerschange.subscribe( (value) => {
      this.players = value;
    })
  }

}
