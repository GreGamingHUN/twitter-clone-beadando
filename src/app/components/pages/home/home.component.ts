import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/posts.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomePageComponent implements OnInit, OnDestroy {


  displayName: string | undefined;
  posts: Post[] = [];
  constructor(private authService: AuthService, private postService: PostService, private _snackbar: MatSnackBar) { }
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
          id: doc.id
        };
      });
      console.log(this.posts);
    });
  }

  filterChanged(event: any) {
    this.postService.getPosts(undefined, event.value).subscribe((querySnapshot) => {
      this.posts = querySnapshot.docs.map((doc) => {
        const data: any = doc.data();
        return {
          title: data.title,
          theme: data.theme,
          content: data.content,
          username: data.username,
          postDate: data.postDate,
          id: doc.id
        };
      });
      console.log(this.posts);
    });
  }

  deletePost(id: string | undefined) {
    this.postService.deletePost(id!);
    this.posts = this.posts.filter((post) => post.id !== id);
    this._snackbar.open('Poszt törölve!', undefined, {
      duration: 2000
    });
  }

}
