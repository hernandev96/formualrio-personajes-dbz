import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-show-character',
  templateUrl: './show-character.component.html',
  styleUrls: ['./show-character.component.css']
})
export class ShowCharacterComponent {
  @Output()
  onDeleteCharacter: EventEmitter<number>=new EventEmitter();



  @Input()
  public characters:Character[]=[{
    name:"",
    power:0,
    avatar:"",
    ataque_principal:""
  }
  
  ];


  delete(index:number):void{
    this.onDeleteCharacter.emit(index);
  }


}
