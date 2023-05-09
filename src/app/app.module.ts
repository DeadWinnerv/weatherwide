import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WindDirrectionPipe } from 'src/pipes/windDirrection.pipe';
import { SvgPathDirective } from 'src/directives/svgPath.directive';

@NgModule({
  declarations: [
    AppComponent,
    WindDirrectionPipe,
    SvgPathDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
