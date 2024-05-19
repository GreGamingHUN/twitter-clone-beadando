import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../../services/posts.service';
import { AuthService } from '../../../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post-page',
  templateUrl: './new-post-page.component.html',
  styleUrl: './new-post-page.component.scss'
})
export class NewPostPageComponent {
  postForm: FormGroup;

  constructor(private postService: PostService, private authService: AuthService, private _snackBar: MatSnackBar, private router: Router) {
    this.postForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      theme: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  addPost() {
    const { title, theme, content } = this.postForm.value;
    this.authService.getCurrentUser().subscribe(user => {
      if (!user) {
        return;
      }
      this.postService.addPost({ title, theme, content, username: user.displayName ?? "" , postDate: Date.now()}).then(() => {
        this._snackBar.open('Sikeres post!', undefined, {
          duration: 2000,
        });
        this.postForm.reset();
        this.router.navigate(['/']);
      });
    });
  }
}
