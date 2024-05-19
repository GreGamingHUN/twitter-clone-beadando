import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePageComponent implements OnInit {
  displayName: string | undefined;
  posts: Post[] = [];
  constructor(private authService: AuthService, private postService: PostService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.displayName = user?.displayName ?? '';
    });
    this.postService.getPosts().subscribe((querySnapshot) => {
      this.posts = querySnapshot.docs.map((doc) => {
        const data: any = doc.data(); // Specify the type of 'data' as 'any'
        return {
          title: data.title,
          theme: data.theme,
          content: data.content,
          username: data.username,
          postDate: data.postDate,
        };
      });
      console.log(this.posts);
    });
  }

}
