import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  postList;

  post = {
    title: '',
    url: ''
  };





constructor(private postsService: PostsService){
//   this.postList = [{
//     _id: 1,
//     title: 'The First Post Title',
//     url: 'http://google.co.in/',
//     votes: 85
//   }, {
//     _id: 2,
//     title: 'The Second Post Title',
//     url: 'http://facebook.com/',
//     votes: 11
//   },{
//     _id: 3,
//     title: 'The Third Post Title',
//     url: 'http://youtube.com/',
//     votes: 36
// }, {
//   _id: 4,
//     title: 'The Fouth Post Title',
//     url: 'http://twitter.com/',
//     votes: 5
// }];
}

ngOnInit(){
  this.postsService.getAllPosts().subscribe((data: Post[]) => {
    this.postList = data;
  })
}

addPost() {
  const newPost = {
    title: this.post.title,
    url: this.post.url,
    votes: 0
  };
  this.postsService.createPost(newPost).subscribe((data: Post) =>{
    this.postList.push(data);
    this.sortPosts();
  });
  this.post = { title: '', url: ''};

}
upVote(post) {
  const thePost = this.postList.find(itm => post._id === itm._id);
  thePost.votes = thePost.votes + 1;
  this.postsService.upVote(post._id, post.votes).subscribe((data: Post) =>{
  });
  this.sortPosts();

}
downVote(post) {
  const thePost = this.postList.find(itm => post._id === itm._id);
  thePost.votes = thePost.votes - 1;
  this.postsService.downVote(post._id, post.votes).subscribe((data: Post) =>{
  });
  this.sortPosts();

}
deletePost(post) {
  this.postsService.deletePost(post._id).subscribe((data: Post) =>{
  const index = this.postList.indexOf(post);
  this.postList.splice(index, 1);
  });
}
sortPosts() {
  this.postList.sort((a, b) => Number(a.votes) < Number(b.votes));
}

}
