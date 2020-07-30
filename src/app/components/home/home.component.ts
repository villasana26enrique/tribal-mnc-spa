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
  public loading: boolean = false;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  getSearch( searchTerm: string ) {
    this.loading = false;
    if ( searchTerm === '') { return; }
    this.itunes = [];
    this.crcind  = [];
    this.tvMaze  = [];
    this.loading = true;
    this.searchService.getSearch$( searchTerm.trim() )
                      .subscribe((data: any) => {
                        this.itunes = data.itunes;
                        this.crcind = data.crcind;
                        this.tvMaze = data.tvMaze;
                        this.loading = false;
                      });
  }

}
