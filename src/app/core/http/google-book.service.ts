import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { AppState } from "src/app/store/app.state";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class GoogleBookService {
  constructor(private readonly http: HttpClient) { }

  public getBooks(): Observable<AppState['books']> {
    return this.http
      .get<{ items: AppState['books'] }>(environment.mainAPI.googleBook)
      .pipe(map(books => books.items || []));
  }
}
