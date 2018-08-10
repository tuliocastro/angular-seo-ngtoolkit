import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = this.route.snapshot.data.posts;
    console.log(this.posts);
  }

}
