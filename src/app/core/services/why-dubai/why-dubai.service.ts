import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WhyDubaiService {
  constructor(private http: HttpClient) {}

  getDubaiAdvantages() {
    return this.http.get<{ todos: { todo: string }[] }>(
      'https://dummyjson.com/todos'
    );
  }
}
