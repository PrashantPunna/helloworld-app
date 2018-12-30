import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: String): String {
    if(!value) return null;
    let words=value.split(" ");
    for(var i=0;i<words.length;i++){
      if(this.isExeceptionString(words[i])&&i>0)
        words[i]=words[i].toLowerCase();
      else
        words[i] = this.toTitleCase(words[i]);
    }
    return words.join(" ");
  }
  
  private isExeceptionString(value: String):boolean{
    let exceptionStrings=[`of`,`the`, `is`, `are`, `for`, `in`, `and`, `in`];
    return exceptionStrings.includes(value.toLowerCase());
  }

  private toTitleCase(value:string):string{
    return value.substr(0,1).toUpperCase()+value.substr(1).toLowerCase();
  }



}
