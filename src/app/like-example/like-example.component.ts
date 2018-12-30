import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-like-example',
  templateUrl: './like-example.component.html',
  styleUrls: ['./like-example.component.css']
})
export class LikeExampleComponent {

  @Input('isLiked') isLiked:boolean;
  @Input('likesCount') likesCount:number;

  @Output('change') change = new EventEmitter();


  onClick(){
    this.isLiked=!this.isLiked;
    this.likesCount+=(this.isLiked)?1:-1;
    this.change.emit();
  }
}
