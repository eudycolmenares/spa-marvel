import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { CharacterComponent } from './components/character/character.component';
import { AsideComponent } from './pages/aside/aside.component';
import { ComicComponent } from './components/comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CharacterComponent,
    AsideComponent,
    ComicComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
