import { Component } from '@angular/core';
import { Character } from './interfaces/character.interface';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './dbz-page.component.html',
  styleUrls: ['./dbz-page.component.css']
})
export class DbzPageComponent {
  public characters:Character[]=[]; 

  onNewCharacter(character:Character):void{
    this.characters.push(character);
  }

  onDeleteCharacter(index:number):void{
    this.characters.splice(index,1);
  }
}
