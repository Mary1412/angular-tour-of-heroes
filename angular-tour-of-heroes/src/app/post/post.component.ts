//import { InMemoryDataService } from './../in-memory-data.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
//import { USERS } from '../mock-users';
import { Post } from './post';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogForAddingComponent } from '../dialog-for-adding/dialog-for-adding.component';

import { DialogForDeletingComponent } from '../dialog-for-deleting/dialog-for-deleting.component';
import { PostService } from '../post.service';
import { DialogForExistingComponent } from '../dialog-for-existing/dialog-for-existing.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  [x: string]: any;
  isActive = false;
  searchStr1="";

  //users = USERS;
  nameControl: FormControl = new FormControl;
  posts: Post[]=[];

  l1:string='';
  
login1:string='';
url:any="";

  constructor(private postService: PostService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPosts();
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
    this.url=String(localStorage.getItem('url')).split('"').join('');
  }

  
  getPosts(): void{
  this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
}



s1=0;
s2=1;
s3=1;
s4=0;
f1=1;
f2=0;


filter(){
this.f1=0
this.f2=5
this.s3=0;
this.s4=1;
}
close(){
  this.f1=0
  this.f2=1
  }

delete(post: Post): void {
  let dr2=this.dialog.open( DialogForDeletingComponent );
dr2.afterClosed().subscribe(result => {
  if(result) {
  this.posts = this.posts.filter(u => u !== post);
  this.postService.deletePost(post.id,post.title).subscribe();
}
})

}

delete2(post: Post): void {
  
  this.posts = this.posts.filter(u => u !== post);
  this.postService.deletePost(post.id,post.title).subscribe();


}

add2(){
  this.s1=1;
  this.s2=0;

}

  post8!: Post;

  add(title: string): void {
    let dr=this.dialog.open(DialogForAddingComponent);
    this.s1=0;
    this.s2=1;
   
    dr.afterClosed().subscribe(result => {
      if(result) {
        title = title.trim();
        if (!title ) { return; }
        this.postService.addPost({ title } as Post)
          .subscribe(post => {
            this.posts.push(post);
          });
      }
    });

  }



}
