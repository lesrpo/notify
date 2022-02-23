import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import Utils from "../utils/utils";

@Injectable({providedIn:'root'})
export class VideoService {
  readonly API_KEY = 'AIzaSyC9QzUtK5QowhfNKAmBAqW-xAaouCQ1kcQ';
  readonly BASE_URL = 'https://www.googleapis.com/youtube/v3';

  constructor(private http: HttpClient) {}

  getVideosByQuery(query: string) {
    return this.http.get(`${this.BASE_URL}/search?key=${this.API_KEY}&part=snippet&maxResults=7&q=${query}`)
      .pipe(map((res: any) => {
      return res.items;
    }));
  }
}
