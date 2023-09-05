import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzPageComponent } from './dbz-page.component';
import { RegistroDbzComponent } from './components/registro-dbz/registro-dbz.component';
import { ShowCharacterComponent } from './components/show-character/show-character.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DbzPageComponent,
    RegistroDbzComponent,
    ShowCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[
    DbzPageComponent
  ]
})
export class DbzPageModule { }
