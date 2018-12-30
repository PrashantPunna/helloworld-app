import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadRequest } from '../common/bad-input';

// @Injectable({
//   providedIn: 'root'
// })
export class DataService {

  //private url;

  constructor(private url:string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url)
            .pipe(catchError(this.handleError)
    );
  }

  create(source){
    return this.http.post(this.url,JSON.stringify(source))
      .pipe(catchError(this.handleError)
    );
  }

  update(id,source){
    return this.http.put(this.url+'/'+id,JSON.stringify(source))
      .pipe(catchError(this.handleError)
    );
  }

  delete(id){
    return this.http.delete(this.url+'/'+id)
      .pipe(catchError(this.handleError));
  }

    private handleError(error:Response){
    if(error.status===400)
            return throwError(new BadRequest(error));
            else if(error.status===404)
            return throwError(new NotFoundError(error));
            else
            return throwError(new AppError(error.json()));
    }


}
