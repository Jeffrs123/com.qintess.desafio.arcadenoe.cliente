import { TestBed } from '@angular/core/testing';

import { CrudGenericService } from './crud-generic.service';

export class T  {

}

describe('CrudGenericService', () => {
  let service: CrudGenericService<T>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudGenericService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
