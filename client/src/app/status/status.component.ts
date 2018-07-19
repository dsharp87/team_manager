import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  gamenumber:number;

  constructor(private _dataservice:DataService, private _route: ActivatedRoute, private _router:Router) {  
  }

  

  ngOnInit() {
    this._dataservice.gamenumchange.subscribe( (value) => {
      this.gamenumber = value;
    })
  }

}
