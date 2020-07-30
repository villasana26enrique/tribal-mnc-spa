import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public itunes: any[] = [];
  public tvMaze:  any[] = [];
  public crcind:  any[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  getSearch( searchTerm: string ) {
    if ( searchTerm === '') { return; }
    this.itunes = [];
    this.crcind  = [];
    this.tvMaze  = [];
    this.searchService.getSearch$( searchTerm )
                      .subscribe((data: any) => {
                        this.itunes = data.itunes;
                        this.crcind = data.crcind;
                        this.tvMaze = data.tvMaze;
                      });
  }

}
