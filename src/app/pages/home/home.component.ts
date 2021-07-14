import { ModelSheet } from './../../models/ModelSheet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  monImage: string = "../../../assets/images/image1.jpg";

  fiches : ModelSheet[] = [];

  jeux = [
    { nom: "donjon", image: "image1.jpg", fiche: "fiche1.jpg" },
    { nom: "donjon", image: "image2.png", fiche: "fiche1.jpg" },
    { nom: "donjon", image: "image3.png", fiche: "fiche1.jpg" },
    { nom: "donjon", image: "image4.jpeg", fiche: "fiche1.jpg" }
  ]

  responsiveOptions;

  constructor(private router: Router) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    
   }

  newGame = () => {
    this.router.navigate(['/game']);
  }

  newSheet = () => {
    this.router.navigate(['/sheet-creation']);
  }

}
