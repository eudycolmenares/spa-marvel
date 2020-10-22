import { Component, OnInit } from '@angular/core';

import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private characterSvc: CharactersService,
  ) { }

  ngOnInit(): void {
  }

  search(value: string) {
    if (value.trim() === '') {
      return false;
    }

    this.characterSvc.getCharacters();

  }
}
