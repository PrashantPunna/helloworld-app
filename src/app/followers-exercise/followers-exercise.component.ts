import { Component, OnInit } from '@angular/core';
import { FollowersServiceService } from '../services/followers-service.service';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';



@Component({
  selector: 'app-followers-exercise',
  templateUrl: './followers-exercise.component.html',
  styleUrls: ['./followers-exercise.component.css']
})
export class FollowersExerciseComponent implements OnInit {


  followers:any;

  constructor(private service:FollowersServiceService, 
    private route: ActivatedRoute) { }

  ngOnInit() {


    // this.route.queryParamMap
    //   .subscribe(queryparams => {
    //     console.log(queryparams.get('order'));
    // });
    
    combineLatest([
        this.route.paramMap,
        this.route.queryParamMap
      ])
      .pipe(switchMap(allParamsMaps => {
        let id = allParamsMaps[0].get('id');
        let page = allParamsMaps[1].get('page');
        let order = allParamsMaps[1].get('order');
        //console.log(id,page,order);

        return this.service.getAll();
      }))
      .subscribe(allParams =>{
        this.followers = allParams;
          //console.log(this.followers[0]);
          console.log(allParams);
        },error=>{
          throw error;
        
    });
    
    
  }

}
