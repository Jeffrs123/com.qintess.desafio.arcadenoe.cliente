import { HttpHeaderResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, Subject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ModalService } from 'src/app/shared/modals/modal.service';
import { Pet } from '../pet';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  items$: Observable<Pet[]>;
  error$ = new Subject<boolean>();
  
  constructor(
    private service: PetService,
    private alertService: ModalService
  ) { }

  ngOnInit(): void {
    this.getPets ()
  }
  getPets () {
    this.items$ = this.service
    .getAll()
    .pipe(
      tap(v => {
        console.log("Pages: ", v);
        if(v.length <= 0) {
          return null;
        }
      }
        
      ),
      // map(dm => this.matters = dm, console.log('mat: ', this.matters)),
      catchError(error => {
        console.error(error);
        console.log('HttpHeaderResponse: ', HttpHeaderResponse.toString())
        this.error$.next(true);
        this.handleError(); //show the alert modal 
        return EMPTY;
      })
    )
  ;
  }
  getPetsOLD() {
    this.items$ = this.service
      .getAll();
    /*this.items$ = this.service
      .getAll()
      .pipe(
        tap(v => {
           console.log('PETS: ', v)
          if (v.length > 0) {
             console.log('Temos PETS de usuários.')
          } else 
          if (v.length <= 0) {
            this.error$.next(true);
            return EMPTY
          }
        }),
        catchError(error => {
           console.log('Erro pra carregar PETS: ', error)
          this.error$.next(true);
          this.handleError();
          return EMPTY
        })
      )
    ;*/
  }

  handleError() {
    this.alertService.showAlertDanger(
      `Erro ao tentar carregar os Pets dos usuários.`,
      "alert", 2000
    );
  }

  onRefresh() {
    this.error$.next(false);
    this.getPets();
  }
}
