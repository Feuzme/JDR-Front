import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import {TableModule} from 'primeng/table';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

  

    selectedCity;

    cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
  
  player = [
    { nom: "Smaug",annee:"2017",partie:"A Song of Ice and Fire",bio:"Détails" },
    { nom: "Kart-man59",annee:"2018",partie:"13th Age RPG",bio:"Détails"   },
    { nom: "D20",annee:"2021",partie:"AD&D ( 1st Edition and 2E )",bio:"Détails"  },
    { nom: "Gérard2Riv",annee:"2020",partie:"AGE System",bio:"Détails"   }
  ]
  loading: boolean;
  totalRecords: number;

  

  constructor() { }

  ngOnInit(): void {
  }



  loadCustomers(event: LazyLoadEvent) {  
    this.loading = true;

    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

     /*setTimeout(() => {
       if (this.datasource) {
            this.customers = this.datasource.slice(event.first, (event.first + event.rows));
            this.loading = false;
        }
    }, 1000);
    */
}

}