import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortDesc'
})
export class ShortDescPipe implements PipeTransform {

    transform(data: any, likes: any): any {
          return data.sort(function(a,b){
              return b.likes - a.likes
          })
      }

}
