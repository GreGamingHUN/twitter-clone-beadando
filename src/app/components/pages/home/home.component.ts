import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePageComponent implements OnInit, OnDestroy {
  displayName: string | undefined;
  posts: Post[] = [];
  constructor(private authService: AuthService, private postService: PostService) { }
  ngOnDestroy(): void {
    this.authServiceSubscription?.unsubscribe();
  }
  authServiceSubscription?: Subscription;
  ngOnInit(): void {
    this.authServiceSubscription = this.authService.getCurrentUser().subscribe((user) => {
      this.displayName = user?.displayName ?? '';
    });
    this.postService.getPosts().subscribe((querySnapshot) => {
      this.posts = querySnapshot.docs.map((doc) => {
        const data: any = doc.data();
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
