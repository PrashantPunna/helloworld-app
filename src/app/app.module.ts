import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './services/courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorService } from './services/author.service';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from './title-case.pipe';
import { LikeExampleComponent } from './like-example/like-example.component';
import { PostExampleComponent } from './post-example/post-example.component';
import { HttpClientModule } from '@angular/common/http';
import { AppErrorHandler } from './common/error-handler';
import { FollowersExerciseComponent } from './followers-exercise/followers-exercise.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { NoAccessComponent } from './no-access/no-access.component';
import { AuthService } from './auth.service';
import { OrderService } from './order.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    TitleCasePipe,
    LikeExampleComponent,
    PostExampleComponent,
    FollowersExerciseComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
    NoAccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'followers/:userid/:username', component: GithubProfileComponent},
      { path:'followers', component: FollowersExerciseComponent},
      { path:'posts', component: PostExampleComponent},
      { path:'**', component: NotFoundComponent}
    ])
  ],
  providers: [
    CoursesService,
    AuthorService,
    {provide:ErrorHandler, useClass: AppErrorHandler},
    AuthService,
    OrderService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
