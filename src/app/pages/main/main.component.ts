import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { CharactersService } from '../../services/characters.service'
import { CharacterModel } from '../../models/character.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject();
  dataCharacters: CharacterModel[] = [];

  constructor(
    private characterSvc: CharactersService,
  ) {
    this.characterSvc.myCharacters$
      .pipe(takeUntil(this.destroy$))
      .subscribe(res => {
        console.log('Desde main', res);
        this.dataCharacters = res['data']['results'].map((item) => (
          {
            id: item.id,
            name: item.name,
            description: item.description,
            image: `${item.thumbnail.path}.${item.thumbnail.extension}`,
            comics: item.comics['items'],
          }
        ));

        console.log('this.dataCharacters', this.dataCharacters);

      })
  }

  ngOnInit(): void {
    this.characterSvc.getCharacters();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
