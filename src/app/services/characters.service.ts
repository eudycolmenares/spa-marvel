import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  url = 'https://gateway.marvel.com:443/v1/public';
  key = '330aa4c6f3523f4f29b879b4dbf5f90c';
  hash = 'd8019366527f9c83e5fba939c9a0473d';
  myCharacters$: Subject<object> = new Subject();
  // user$: BehaviorSubject<UserClass> = new BehaviorSubject<UserClass>(null);

  constructor(
    private http: HttpClient,
  ) {
    this.myCharacters$.next({})
  }

  getCharacters(offset = 0, name = 'spi') {
    this.http.get(`${this.url}/characters?apikey=${this.key}&hash=${this.hash}&ts=1&offset=${offset}${(name) && '&nameStartsWith='}${name}`).pipe(
      tap(res => this.myCharacters$.next(res))
    ).subscribe();
  }
}
