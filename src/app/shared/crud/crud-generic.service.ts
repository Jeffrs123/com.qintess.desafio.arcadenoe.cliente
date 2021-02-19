import { HttpClient } from "@angular/common/http";
import { tap, delay, take, map } from "rxjs/operators";
import { Observable } from 'rxjs';

export class CrudGenericService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL
  ) { }

  getAll(): Observable<any> {
    return this.http.get<T[]>(`${this.API_URL}`)
    //.pipe(
      //tap(v =>v)
    //)
    //return this.http.get(`${this.fullBaseUrl}`);
  }

  getOld(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/${id}`);
  }
  get(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`);
  }

  create(item: T) {
    return this.http.post(`${this.API_URL}`, item);
  }

  update(id: number, value: any) {
    return this.http.put(`${this.API_URL}/${id}`, value);
  }

  deleta(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
    //return this.http.delete(`${this.API_URL}/${id}`, { responseType: 'text'});
  }

}
