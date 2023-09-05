import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DbzPageComponent } from './dbz-page/dbz-page.component';
import { DbzPageModule } from './dbz-page/dbz-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DbzPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
