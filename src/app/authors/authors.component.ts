import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../services/author.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors;
  constructor(service: AuthorService) { 
    this.authors = service.getAuthors();
  }
    
  ngOnInit() {
  }

}
