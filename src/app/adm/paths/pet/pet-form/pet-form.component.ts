import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/modals/modal.service';
import { Pet } from '../pet';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  id!: number;
  pet!: Pet;
  inscricao: Subscription;
  param: any;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private alertService: ModalService
  ) { }

  ngOnInit(): void {
    this.getParams();
  }

  getParams() {
    this.param =  this.route.snapshot.url[0];

    if(this.param !== 'novo') {
      this.id = this.route.snapshot.params['id']
      this.get()
    }
  }

  

  get() {
    this.pet = new Pet();
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        if (this.id !== null && this.id !== undefined) {
          this.getPet(this.id);
        }
      }
    )
  }

  getPet(id: number) {
    this.inscricao = this.petService
          .get(id)
          .subscribe(
            (data: Pet) => {
              this.pet = data;// this.handleSuccess("salvo com sucesso. data => " + data);
            },
            (e: any) =>  this.handleError(e.error.message)
          )
        ;
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  save() {
    this.petService
      .create(this.pet)
      .subscribe(
        (data: any) => {
          this.handleSuccess(data.message),
          console.log(data)
        },
        (e: any) =>  this.handleError(e.error.message)
      );
    this.pet = new Pet();
    this.goToList();
  }

  goToList() {
    this.router.navigate(['admin/pet'])
  }

  handleSuccess(message: string) {
    this.alertService.showAlertSuccess(
      `${message}`,
      "alert",
      5000
    );
  }

  handleError(message: string) {
    this.alertService.showAlertDanger(
      `${message}`,
      "alert",
      5000
    );
  }


  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
