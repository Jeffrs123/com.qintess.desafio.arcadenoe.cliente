import { HttpClient } from "@angular/common/http";
import { tap, delay, take, map } from "rxjs/operators";
import { Observable } from 'rxjs';

export class CrudGenericService<T> {

  constructor(
    protected http: HttpClient,
    private API_URL
  ) { }

  getAll(): Observable<any> {
    console.log("Entramos no méttodo para listar todos")
    return this.http.get<T[]>(`${this.API_URL}`)
    //.pipe(
      //tap(v =>v)
    //)
    //return this.http.get(`${this.fullBaseUrl}`);
  }
}
