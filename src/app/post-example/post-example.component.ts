import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';
import { NotFoundError } from '../common/not-found-error';
import { AppError } from '../common/app-error';
import { BadRequest } from '../common/bad-input';

@Component({
  selector: 'app-post-example',
  templateUrl: './post-example.component.html',
  styleUrls: ['./post-example.component.css']
})
export class PostExampleComponent implements OnInit {

  posts:any;
  

  constructor(private service: PostService ) { 
    
  }

  ngOnInit() {
    this.service.getAll()
      .subscribe(response =>{
        this.posts=response;
        console.log(this.posts);
    },(error:AppError) =>{
      if(error instanceof NotFoundError){
        console.log('Not Found 404');
      }else throw error;
    });
  }

  newPost(input: HTMLInputElement){
    let post = {title: input.value};

    input.value='';

    this.service.create(JSON.stringify(post))
      .subscribe(response=>{
        console.log(response);
        this.posts.splice(0,0,post);
      },(error:AppError) =>{
        if(error instanceof NotFoundError){
          console.log('Not Found 404');
        }else throw error;
        
      });
  }

  updatePost(input:HTMLInputElement){
    // this.http.patch(this.url+'/'+input.id,JSON.stringify({isRead:"true"}))
    //   .subscribe(response=>{
    //     console.log(response);
      
    // });

    this.service.update(input.id,JSON.stringify(input))
      .subscribe(response=>{
        console.log(response);
      
    },(error:AppError) =>{
      if(error instanceof BadRequest){
        console.log('Not Found 400');
      }else throw error;
    });
  }

  deletePost(input){
    this.posts.splice(this.posts.indexOf(input),1);
    this.service.delete(input.id)
      .subscribe(response =>{
        console.log(response);

      },(error:AppError) =>{
        this.posts.splice(0,1);
        if(error instanceof NotFoundError){
          console.log('Not Found 404');
        }else throw error;
      });
  }
  

}
