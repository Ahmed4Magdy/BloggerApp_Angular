// import { Component, OnInit } from '@angular/core';
// import { BlogService } from '../../services/blog.service';
// import { Router } from '@angular/router';
// import { Post } from '../blog-list/model'; 

// @Component({
//   selector: 'app-blog-list',
//   templateUrl: './blog-list.component.html',
//   styleUrls: ['./blog-list.component.scss']
// })
// export class BlogListComponent implements OnInit {
//   posts: Post[] = []; 
// authService: any;

//   constructor(private blogService: BlogService, private router: Router) {}

//   ngOnInit(): void {
//     this.posts = this.blogService.getPosts();
//   }

//   editPost(id: string): void {
//     this.router.navigate([`/blogs/edit/${id}`]);
//   }

//   deletePost(id: string): void {
//     this.blogService.deletePost(id);
//     this.posts = this.blogService.getPosts(); 
//   }

//   isAuthor(post: Post): boolean {
//     return true; 
//   }
// }

import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { Post } from '../blog-list/model'; // Adjust the path to your model file
import { AuthService } from '../../services/auth.service'; // Adjust the import path as needed

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Post[] = []; // Use the Post interface here

  constructor(
    private blogService: BlogService, 
    private router: Router,
    public authService: AuthService // Inject AuthService
  ) {}

  ngOnInit(): void {
    this.posts = this.blogService.getPosts();
  }

  editPost(id: string): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate([`/blogs/edit/${id}`]);
    }
  }

  deletePost(id: string): void {
    if (this.authService.isAuthenticated()) {
      this.blogService.deletePost(id);
      this.posts = this.blogService.getPosts(); // Refresh list
    }
  }
}
