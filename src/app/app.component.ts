import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [ 
    new Post("My first post", "content 1", 0), 
    new Post("My second post", "content 2", 0), 
    new Post("My third post", "content 3", 0)
  ];
}
