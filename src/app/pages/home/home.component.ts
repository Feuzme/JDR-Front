import { Component, OnInit } from '@angular/core';
// import { Product } from './products';
// import { ProductService } from './productservices';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // products: Product[];
	

  monImage : string = "../../../assets/images/image1.jpg";

  jeux = [
    { nom: "donjon", image : "image1.jpg",fiche : "fiche1.jpg"},
    { nom: "donjon", image : "image2.png", fiche : "fiche1.jpg"},
    { nom: "donjon", image : "image3.png" , fiche : "fiche1.jpg"},
    { nom: "donjon", image : "image4.jpeg" , fiche : "fiche1.jpg"}
  ]
  


	responsiveOptions;

	constructor() { 
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
		// this.productService.getProductsSmall().then(products => {
		// 	this.products = products;
		// });
    }
}
