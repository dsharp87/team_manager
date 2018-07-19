import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players:object[];

  constructor(private _dataservice:DataService, private _router:Router) {
    this.players = [];
  }

  deleteplayer(id) {
    console.log(id);
    //THIS IS WHERE YOU WOULD PUT AN ALERT, THAT WOULD WAIT FOR YES , AND THEN RUN DELETE IF SO
    this._dataservice.deleteplayer(id, (data) => {
      console.log(data, 'deleteplayer component callback');
    });
  }

  ngOnInit() {
    this._dataservice.playerschange.subscribe( (value) => {
      this.players = value;
    })
  }

}
