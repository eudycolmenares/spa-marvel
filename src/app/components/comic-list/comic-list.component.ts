import { Component, OnInit, Input } from '@angular/core';

import { CharacterModel } from '../../models/character.model';

@Component({
  selector: 'app-comic-list',
  templateUrl: './comic-list.component.html',
  styleUrls: ['./comic-list.component.scss']
})

export class ComicListComponent implements OnInit {
  @Input() data: CharacterModel;

  constructor() { }

  ngOnInit(): void {
    // console.log('<comic-list>');
    // console.log(this.data);
  }

}
