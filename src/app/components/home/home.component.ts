import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  getSearch( searchTerm: string ) {
    console.log(searchTerm);
    this.searchService.getSearch$( searchTerm )
                      .subscribe( (data: any) => console.log(data) );
  }

}
