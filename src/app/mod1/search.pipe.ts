import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})

export class SearchPipe implements PipeTransform {
  transform (names, value) {
    return names.filter(user => {
      return user.includes(value)
    })
  }
}
