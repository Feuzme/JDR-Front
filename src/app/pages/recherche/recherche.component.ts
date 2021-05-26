import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {



  
  player = [
    { nom: "Smaug",annee:"2017",partie:"A Song of Ice and Fire",bio:"Détails" },
    { nom: "Kart-man59",annee:"2018",partie:"13th Age RPG",bio:"Détails"   },
    { nom: "D20",annee:"2021",partie:"AD&D ( 1st Edition and 2E )",bio:"Détails"  },
    { nom: "Gérard2Riv",annee:"2020",partie:"AGE System",bio:"Détails"   }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
