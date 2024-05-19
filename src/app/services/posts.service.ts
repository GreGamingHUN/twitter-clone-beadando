import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private firestore: AngularFirestore) { }

  getPosts(username?: string) {
    if (username) {
      return this.firestore.collection('posts', ref => ref.where('username', '==', username)).get();
    }
    return this.firestore.collection('posts').get();
  }
  addPost(post: Post) {
    return this.firestore.collection('posts').add(post);
  }
  
}