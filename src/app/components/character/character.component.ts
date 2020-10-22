import { Component, OnInit, Input } from '@angular/core';

import { CharacterModel, ComicsModel } from '../../models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})

export class CharacterComponent implements OnInit {
  @Input() data: CharacterModel;
  noDrescription = 'Without description';
  relatedComics: ComicsModel;
  dataComics: ComicsModel[] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log('Data recibida: ', this.data);
    const lengthComics = this.data.comics.length;
    const arrayIndex = [];
    if (lengthComics > 0) {
      for (let i = 0; i < 4; i++) {
        arrayIndex.push(Math.floor(Math.random() * lengthComics) + 1);
      }
      const comicsNew = [];
      for (const i of arrayIndex) {
        comicsNew.push(this.data.comics[(i-1)]);
      }
      this.dataComics = comicsNew;
    }
  }
}
