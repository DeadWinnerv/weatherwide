import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WindDirrectionPipe } from 'src/pipes/windDirrection.pipe';
import { SvgPathDirective } from 'src/directives/svgPath.directive';
import { PreloaderComponent } from 'src/ui/preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    WindDirrectionPipe,
    SvgPathDirective,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
