import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence';
import { ResidenceServiceService } from '../services/residence-service.service';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent implements OnInit {

  listFav:Residence[]=[];
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria","image":"../../assets/images/image.jpg", status: "Disponible"},
    {id:2,"name": "El yasmine","address":"Ezzahra","image":"../../assets/images/image.jpg", status:"Disponible" },
    {id:3,"name": "El Arij","address":"Rades","image":"../../assets/images/image.jpg", status:"Vendu"},
    {id:4,"name": "El Anber","address":"inconnu","image":"../../assets/images/image.jpg", status: "En Construction"}
  ];

    searchTerm: string = '';
    filteredResidences: Residence[] = [];

    constructor(private residenceService: ResidenceServiceService) {}
  
    ngOnInit(): void {
      //this.filteredResidences = [...this.listResidences];  // Initialize filtered list
      this.fetchResidences();
    }


    fetchResidences() {
      this.residenceService.getallResidence().subscribe(
        (data) => {
          this.listResidences = data;
          this.filteredResidences = [...this.listResidences]; // Initialize filtered list
        },
        (error) => {
          console.error('Error fetching residences:', error);
        }
      );
    }
  
    // Function to filter residences based on search term
    filterResidences() {
      const term = this.searchTerm.toLowerCase().trim();
      if (term) {
        this.filteredResidences = this.listResidences.filter(residence =>
          residence.address.toLowerCase().includes(term)
        );
      } else {
        this.filteredResidences = [...this.listResidences];  // Reset if empty search
      }
    }
    
    

    showLocation(residence:Residence){
      if (residence.address=="inconnu")
      alert('L adresse de '+residence.name+' est inconnue')
      else
      alert('L adresse de '+residence.name+' est '+residence.address);
    } 

    listFavoris(residence:Residence){
      const index = this.listFav.findIndex(r => r.id == residence.id);
      if (index > -1) {
        this.listFav.splice(index, 1)
      }
      else {
        this.listFav.push(residence)
        console.log("list fav : " + JSON.stringify(this.listFav))
    }
  }

  deleteresidence(id:any){
    this.residenceService.deleteResidence(id).subscribe(()=>{
      console.log("deleted")
     // window.location.reload()
     this.ngOnInit()
    })
       }

}
