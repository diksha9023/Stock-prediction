import { Component, OnInit } from '@angular/core';
import{ PlayerService } from '../player.service';
import{ PlayerClass } from '../player';
import {SEARCH} from '../player-stock';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})


export class PlayerComponent implements OnInit
 {
private CurrentSearchValue : PlayerClass;
private pastSearchValue : PlayerClass[] = []
constructor(private playerservice:PlayerService){}
  ngOnInit() {
  }
  
  getClick(SearchElement : string): void{
    this.CurrentSearchValue = this.playerservice.getClick(SearchElement);
    this.CurrentSearchValue.SearchTime = (new Date()).toTimeString();
this.pastSearchValue.push(this.CurrentSearchValue);
  }
}

