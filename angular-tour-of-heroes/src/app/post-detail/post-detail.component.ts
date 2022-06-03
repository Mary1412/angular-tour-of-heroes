import { User } from '../users/user';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Location } from '@angular/common';
import { Post } from '../post/post';
import { PostService } from '../post.service';
import { Com } from '../post/Com';

@Component({
  selector: 'app-user-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  nameControl: FormControl = new FormControl;
  nameControl2: FormControl = new FormControl;
 
  isActive = false;

  @Input() post?: Post;
  @Input() com?: Com;
  posts: Post[]=[];
  comments: Com[]=[];
  
  l1:string='';
  
  login1:string='';
  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPost();
    this.getCom();
    this.l1=String(localStorage.getItem('login1')).split('"').join('');
  }

  getCom(): void{
    this.postService.geComments()
      .subscribe(comments => this.comments =comments);
  }

  s=0;
  setting(){
    this.s=1;

  }

  getPost(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const title = String(this.route.snapshot.paramMap.get('title'));
    const body = String(this.route.snapshot.paramMap.get('body'));
    this.postService.getPost(id, title, body)
      .subscribe(post => this.post = post);    
  }

  goBack(): void{
    this.location.back();
    
  }
  
  save(): void {
    if (this.post) {
      this.postService.updatePost(this.post.id,this.post)
        .subscribe();
    }
    this.s=0;
  }

}
