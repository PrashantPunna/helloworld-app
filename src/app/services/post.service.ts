import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequest } from '../common/bad-input';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends DataService{

  constructor(http: HttpClient) { super('http://jsonplaceholder.typicode.com/posts',http); }

}
