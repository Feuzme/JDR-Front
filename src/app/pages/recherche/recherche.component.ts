import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {


  selectedValues: string[] = ['val1','val2','val3','val4','val5','val6','val7'];
  selectedFrequence: string[] = ['fre1','fre2','fre3'];

  displayModalPartie: boolean;
  displayModalPlayer: boolean;
  displayModalFiche: boolean;

  showModalDialog=()=>{
    this.displayModalFiche = true;
  }

  showModalDialogPartie=()=>{
    this.displayModalPartie = true;
  }

  showModalDialogPlayer=()=>{
    this.displayModalPlayer = true;
  }


  selectedPlayers: string[] = [];
  player = [
    { nom: "Smaug", annee:"2017", partie:"A Song of Ice and Fire", bio:"Détails" },
    { nom: "Kart-man59",annee:"2018",partie:"13th Age RPG",bio:"Détails"   },
    { nom: "D20",annee:"2021",partie:"AD&D ( 3st Edition and 3E )",bio:"Détails"  },
    { nom: "Gérard2Riv",annee:"2020",partie:"AGE System",bio:"Détails"   },
    { nom: "62Right",annee:"2018",partie:"13th Age RPG",bio:"Détails"   },
    { nom: "BigBoss",annee:"2020",partie:"AD&D ( 1st Edition and 2E )",bio:"Détails"  },
    { nom: "SamyTaroz",annee:"2020",partie:"AGE & COS",bio:"Détails"   },
    

    

  ]

  partie = [
    { nom: "JDR Warcraft", place:"3", partie:" Saturday May 08 7:00", detail:"Détails" },
    { nom: "Just A DnD",place:"5",partie:" Saturday May 08 7:00",detail:"Détails"   },
    { nom: "Multiple Campaigns",place:"7",partie:"Thursday May 13 7:00PM",detail:"Détails"  },
    { nom: "DONJON £ DRAGON",place:"2",partie:"Sunday May 09 1:00AM",detail:"Détails"   },
    { nom: "Night Watch",place:"4",partie:"Tuesday June 01 5:45AM",detail:"Détails"  },
    { nom: "Methods of madness",place:"1",partie:"Friday June 04 8:30PM",detail:"Détails"   }
  ]

  
  selectedFiches: string[] = [];
 

  fiche = [
    { nom: "FicheSmaug",jeu:"JDR Warcraft",auteur:"Smaug",detail:"Détails" },
    { nom: "FicheKart-man59",jeu:"Just A DnD",auteur:"Kart-man59",detail:"Détails"  },
    { nom: "FicheD20",jeu:"D20",auteur:"D20",detail:"Détails"  },
    { nom: "SoretFiche2Riv",jeu:"DONJON £ DRAGON",auteur:"Gérard2Riv",detail:"Détails" },
    { nom: "FicheGerzaKart-man59",jeu:"Just A DnD",auteur:"Kart-man59",detail:"Détails"  },
    { nom: "FicheA5020",jeu:"D20",auteur:"D20",detail:"Détails"  },
    { nom: "FicheLuna2Riv",jeu:"DONJON £ DRAGON",auteur:"Gérard2Riv",detail:"Détails" }
  ]

  selectedTrie: string[] = [];
  trie= [
    { nom: "Pertinence"},
    { nom: "Le plus ancier" },
    { nom: "Le plus recent" },
    { nom: "Le meilleur classement" },

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



