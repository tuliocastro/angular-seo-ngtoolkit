import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private meta: Meta){}

  ngOnInit(){
    this.meta.addTag({name: "description", content: "This example show us the power of angular 6 and SEO"})
  }
}
