import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceServiceService } from '../services/residence-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from '../core/models/residence';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent {
  formResidence!: FormGroup;
  residenceId!: number;
    constructor(private resService:ResidenceServiceService, 
      private route: ActivatedRoute,
      private router: Router )
    {}

    ngOnInit(): void {
        this.formResidence = new FormGroup({
          name: new FormControl('', [Validators.required, Validators.minLength(2)]),
          address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
          //image: new FormControl('../../assets/images/residence1.jpg', Validators.required),
          status: new FormControl('', [Validators.required, Validators.pattern('^(Disponible|Vendu|En Construction)$')])
        });

        //Get residence ID from route parameters
    this.residenceId = Number(this.route.snapshot.paramMap.get('id'));

        // Fetch residence details and prefill form
    this.resService.getResidenceById(this.residenceId).subscribe(
      (residence: Residence) => {
        this.formResidence.patchValue(residence); // Prefill form fields
      },
      (error) => console.error('Error fetching residence:', error)
    );

      }

      get status(){
        return this.formResidence.get('status')
      }
      update(){
        if (this.formResidence.valid) {
          const updatedResidence: Residence = {
            id: this.residenceId,
            ...this.formResidence.value
          };
    
          this.resService.updateResidence(updatedResidence, this.residenceId).subscribe(
            () => {
              alert('Residence updated successfully!');
              this.router.navigate(['/residences']); // Redirect to residences list
            },
            (error) => console.error('Error updating residence:', error)
          );}
      }
}
