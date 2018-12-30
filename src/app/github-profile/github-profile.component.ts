import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private router:Router) { }

  ngOnInit() {
    //console.log(this.route.snapshot.paramMap.get('userid'));
    this.route.paramMap
      .subscribe(params => {
        console.log(params.get('userid'));
      });
  }

  onSubmit(){
    this.router.navigate(['/followers'],{
      queryParams: {page:1, order: 'current'}
    });
  }

}
