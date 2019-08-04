
import { Injectable } from '@angular/core';
import { PlayerClass } from './player';
import { SEARCH } from './player-stock';
@Injectable()
export class PlayerService 
{
  private player : PlayerClass[] = SEARCH;
  constructor() {}
  getClick(SearchElement : string): PlayerClass
  {
    for(var i=0;i<this.player.length;i++)
    {
      if(this.player[i].SearchElement == SearchElement)
      {
        return this.player[i];
      }
    }
  }
}