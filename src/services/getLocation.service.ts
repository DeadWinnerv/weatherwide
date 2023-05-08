import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetLocationService {
  public api_key: string = '442106a38a5b4708aaedffafd45b9ead'
  public url: string = `https://ipgeolocation.abstractapi.com/v1/?api_key=${this.api_key}`

  constructor(private http: HttpClient) { }

  public getPosition(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((res: any) => {
        console.log(res);
        return res;
      })
    );
  }
}
