import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CrudGenericService } from 'src/app/shared/crud/crud-generic.service';
import { Pet } from '../pet';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PetService extends CrudGenericService<Pet> {

  constructor(
    protected http: HttpClient
  ) {
    super(http, `${environment.API}pet`)
  }
}
