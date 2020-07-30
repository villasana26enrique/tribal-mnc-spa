import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ['footer { color: white; position: fixed; bottom: 0px; width: 100%; }']
})
export class FooterComponent implements OnInit {

  public year: number;

  constructor() {
    this.year = new Date().getFullYear();
  }

  ngOnInit(): void {
  }

}
