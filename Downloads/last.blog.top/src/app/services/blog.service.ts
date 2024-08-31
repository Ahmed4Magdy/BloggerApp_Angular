import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts = [
    // Example posts
    { id: '1', title: 'First Post', content: 'This is the first post' },
    { id: '2', title: 'Second Post', content: 'This is the second post' }
  ];

  getPosts() {
    return this.posts;
  }

  addPost(title: string, content: string) {
    const id = (this.posts.length + 1).toString();
    this.posts.push({ id, title, content });
  }

  updatePost(id: string, title: string, content: string) {
    const post = this.posts.find(p => p.id === id);
    if (post) {
      post.title = title;
      post.content = content;
    }
  }

  deletePost(id: string) {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
