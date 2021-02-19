import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/shared/modals/modal.service';
import { Pet } from '../pet';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

  id!: number;
  pet!: Pet;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService,
    private alertService: ModalService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.pet = new Pet();
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.petService
          .get(this.id)
          .subscribe(
            (data: Pet) => this.pet = data,
            (e: any) =>  this.handleError(e.error.message)
          )
        ;
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editar() {
    this.router.navigate(['/pet', this.pet.id, 'editar']);
  }

  handleError(message: string) {
    this.alertService.showAlertDanger(
      `${message}`,
      "alert",
      5000
    );
  }
}
