import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styles: []
})
export class CardsComponent implements OnInit {
  @Input() itunes: any = false;
  @Input() tvMaze: any = false;
  @Input() crcind: any = false;

  constructor() { }

  ngOnInit(): void {
  }

}
