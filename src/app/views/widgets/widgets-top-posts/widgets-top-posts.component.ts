import { Component, OnInit} from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';
@Component({
  selector: 'app-widgets-top-posts',
  templateUrl: './widgets-top-posts.component.html',
  styleUrls: ['./widgets-top-posts.component.scss']
})
export class WidgetsTopPostsComponent implements OnInit{

  public posts: any = []
  constructor(private firestoreService:FirestoreService){

  }
  
  ngOnInit(): void {
  
    this.getTopPosts();
  }
  getTopPosts() {     

    this.firestoreService.getTopPosts().then((result)=>{
      this.posts=result,
      
      console.log(this.posts);});
  }
 
}
