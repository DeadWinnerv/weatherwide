import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirrection'
})
export class WindDirrectionPipe implements PipeTransform {

  transform(value: any): any {
    switch(true) {
      case (value>337.5 || value<=22.5):
        return 'С'
      case (value>22.5 && value<= 67.5):
        return 'СВ'
      case(value>67.5 && value<=112.5):
        return 'В'
      case(value>112.5 && value<=157.5):
        return 'ЮВ'
      case(value>157.5 && value <=202.5):
        return 'Ю'
      case(value>202.5 && value <=247.5):
        return 'ЮЗ'
      case(value>247.5 && value <=292.5):
        return 'З'
      case(value>292.5 && value <=337.5):
        return 'СЗ'
      default:
        return null
    }
  }

}
