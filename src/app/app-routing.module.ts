import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { PostResolver } from './posts/posts.resolver';

const routes: Routes = [
  {
    path: "posts",
    component: PostsComponent,
    resolve: {posts: PostResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
