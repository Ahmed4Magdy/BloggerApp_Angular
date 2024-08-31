// import { Component, OnInit } from '@angular/core';
// import { BlogService } from '../../services/blog.service';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-blog-form',
//   templateUrl: './blog-form.component.html',
//   styleUrls: ['./blog-form.component.css']
// })
// export class BlogFormComponent implements OnInit {
//   title = '';
//   content = '';
//   postId: string | null = null;

//   constructor(
//     private blogService: BlogService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}

//   ngOnInit(): void {
//     this.postId = this.route.snapshot.paramMap.get('id');
//     if (this.postId) {
//       const post = this.blogService.getPosts().find(p => p.id === this.postId);
//       if (post) {
//         this.title = post.title;
//         this.content = post.content;
//       }
//     }
//   }

//   onSubmit(): void {
//     if (this.postId) {
//       this.blogService.updatePost(this.postId, this.title, this.content);
//     } else {
//       this.blogService.addPost(this.title, this.content);
//     }
//     this.router.navigate(['/']);
//   }
// }
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  title = '';
  content = '';
  postId: string | null = null;
post: any;

  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.postId = this.route.snapshot.paramMap.get('id');
    if (this.postId) {
      const post = this.blogService.getPosts().find(p => p.id === this.postId);
      if (post) {
        this.title = post.title;
        this.content = post.content;
      }
    }
  }

  onSubmit(): void {
    if (this.title && this.content) {
      if (this.postId) {
        this.blogService.updatePost(this.postId, this.title, this.content);
      } else {
        this.blogService.addPost(this.title, this.content);
      }
      this.router.navigate(['/']);
      
    }
  }
}
