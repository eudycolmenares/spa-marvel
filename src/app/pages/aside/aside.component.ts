import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})

export class AsideComponent implements OnInit {
  @ViewChild('aside') aside: ElementRef;
  @ViewChild('title') title: ElementRef;
  @ViewChild('comics') comics: ElementRef;
  arrayComics = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const asideH = this.aside.nativeElement.offsetHeight;
    const titleH = this.title.nativeElement.offsetHeight;
    this.comics.nativeElement.style.height = (asideH - titleH - 32 - 32) + 'px';
    this.arrayComics = [1,2,3,4,5,6,7];
  }
}
