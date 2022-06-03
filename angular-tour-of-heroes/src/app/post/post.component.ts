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

  constructor(private postService: PostService , public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getPosts();
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
  }

  
  getPosts(): void{
  this.postService.getPosts()
    .subscribe(posts => this.posts = posts);
}





  add(title: string): void {
    let dr=this.dialog.open(DialogForAddingComponent);

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

  delete(post: Post): void {
    let dr2=this.dialog.open( DialogForDeletingComponent );
  dr2.afterClosed().subscribe(result => {
    if(result) {
    this.posts = this.posts.filter(u => u !== post);
    this.postService.deletePost(post.id,post.title).subscribe();
  }
})

}

}
