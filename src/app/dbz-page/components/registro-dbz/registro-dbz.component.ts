import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-registro-dbz',
  templateUrl: './registro-dbz.component.html',
  styleUrls: ['./registro-dbz.component.css']
})
export class RegistroDbzComponent {
  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();


  public character:Character={
    name:"",
    power:0,
    avatar:"",
    ataque_principal:""

  }

  sendCharacter():void{
    if(this.character.name.length===0 || this.character.ataque_principal.length===0 || this.character.avatar.length===0 )return;

    /**Emitimos el nuevo personaje */
    this.onNewCharacter.emit({...this.character});

    this.character.name="";
    this.character.power=0;
    this.character.avatar="";
    this.character.ataque_principal="";

  }

}
