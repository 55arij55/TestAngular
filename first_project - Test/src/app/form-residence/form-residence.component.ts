import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResidenceServiceService } from '../services/residence-service.service';

@Component({
  selector: 'app-form-residence',
  templateUrl: './form-residence.component.html',
  styleUrls: ['./form-residence.component.css']
})
export class FormResidenceComponent implements OnInit{
  formResidence!: FormGroup;
  constructor(private resService:ResidenceServiceService,private router:Router )
  {}

  ngOnInit(): void {
    this.formResidence = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      address: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 ]*$')]),
      //image: new FormControl('../../assets/images/residence1.jpg', Validators.required),
      status: new FormControl('', [Validators.required, Validators.pattern('^(Disponible|Vendu|En Construction)$')])
    });
  }

  //to test the form validation
  onSubmit() {
    if (this.formResidence.valid) {
      console.log('Form Submitted', this.formResidence.value);
    } else {
      console.log('Form is invalid');
      this.formResidence.markAllAsTouched();
    }
  }


  add(){
    //console.log('my form : '+JSON.stringify(this.formR.value))
    this.resService.addResidence(this.formResidence.value).subscribe(()=>{
      //console.log('added!!!!!')
      this.router.navigate(['/residence'])
    })
  }
  


}
