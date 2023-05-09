import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[appSvgPath]',
})
export class SvgPathDirective implements AfterViewChecked {
  @Input('appSvgPath') weatherCode: number;

  value: string;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewChecked(): void {
    switch (this.weatherCode) {
      case 0:
        this.value = 'clear_day';
        break;
      case 1:
      case 2:
      case 3:
        this.value = 'cloud';
        break;
      case 45:
      case 48:
        this.value = 'foggy';
        break;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
        this.value = 'rainy';
        break;
      case 71:
      case 73:
      case 75:
      case 77:
      case 80:
      case 81:
      case 82:
      case 85:
      case 86:
        this.value = 'weather_snowy';
        break;
      case 95:
      case 96:
      case 99:
        this.value = 'thunderstorm';
        break;
      default:
        this.value = 'wrong_location';
    }
    this.elementRef.nativeElement.innerHTML = this.value;
  }
}
