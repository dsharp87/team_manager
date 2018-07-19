import { Component, OnInit } from '@angular/core';
import { DataService } from '.././data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  player:object;

  constructor(private _dataservice:DataService, private _router:Router) {
    this.player = {
      name: '',
      position: ''
    }
   }

   addplayer() {
     console.log(this.player, "addplayer component")
     this._dataservice.addplayer(this.player, (data) => {
       console.log(data, "component addplayer callback")
       this._router.navigate(['/players/list']);
     })
   }

  ngOnInit() {
  }

}
