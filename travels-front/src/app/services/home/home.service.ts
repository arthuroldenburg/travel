import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../../models/place.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private url = 'https://dbjsontravels.onrender.com/places';

  constructor(private hc: HttpClient) {}

  public getAll(): Observable<Place[]> {
    return this.hc.get<Place[]>(this.url);
  }
}
