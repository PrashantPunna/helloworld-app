
import { Component } from '@angular/core';
import { CoursesService } from './services/courses.service';

@Component({
    selector: 'courses',  // for <courses>  ======= "courses", 
                         //for <div class = "courses"> ====".courses", 
                         //for<div id="courses"> ===="#courses"
    template: `
    <h2>{{title + getTitle()}} </h2> ///interpolation
        <br><br>
        
        <span 
            [class]="isSelected?'fas fa-star':'far fa-star'"
            (click)="onStarClick()"
        ></span>
        <br><br>

        <input #titleCase (value)="titlecase" (keyup)="onNewWord(titleCase.value)"/>
        <p>{{ titlecaseResult | titleCase }}</p>

        <br><br>

        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <!<img [src]="url" [attr.height]="length" [attr.width]="length">  <!property binding & attribute binding>
        <br><br>
        <button class="btn btn-primary">Bootstrap Button</button>  <!bootstrap>
        <br><br>
        <button class="btn btn-success" [class.btn-lg]="isActive">Class Binding</button> <!class binding>
        <br><br>
        <button class="btn" [style.backgroundColor]=" isActive?'pink':'orange' ">StyleBinding</button>  <!style binding>
        <br>
        <br>
        <div (click)="onDivClicked()">
           <button class = "btn" (click)="onSave($event)">Save</button>  <!event binding>
        </div>
        
        <br><br>

        <input #email (keyUp.enter)="onKeyUp(email.value)"/>  <!event filtering keyUP.enter, template variables like #email>
        <br><br>
        <input [(ngModel)]="email1" (keyUp.enter)="onKeyUp1()"/>

    `
})
export class CoursesComponent{
    title = "List of courses";
    url='https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1575&q=80';
    length=400;
    isActive=false;
    email1="myemail@gmail.com";
    isSelected=false;
    titlecase="";
    titlecaseResult;
    

    onNewWord(value){
        this.titlecaseResult=value;
        //this.titlecaseResult=this.titlecase.split(" ");

        //this.titlecaseResult=value;
    }


    getTitle(){
        return this.title;
    }
    courses;

    constructor(service: CoursesService){
        this.courses = service.getCourses();
    }


    onSave($event){
        this.isActive=true;
        $event.stopPropagation(); //stops event bubbling
        console.log(`Save button clicked`,$event);
    }

    onDivClicked(){
        console.log("DIV clicked");
    }
     
    onKeyUp(email){
        console.log(`ew`,email);
    }

    onKeyUp1(){
        console.log(this.email1);
    }


    onStarClick(){
        this.isSelected=!this.isSelected;
    }

}