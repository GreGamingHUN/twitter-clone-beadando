import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/posts.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountPageComponent implements OnInit {
  user: any;
  posts: Post[] = [];
  constructor(private authService: AuthService, private postService: PostService, private _snackbar: MatSnackBar) { }
  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe((user) => {
      this.user = user;
      this.postService.getPosts(this.user.displayName).subscribe((querySnapshot) => {
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
