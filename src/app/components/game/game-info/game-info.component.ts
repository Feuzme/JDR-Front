import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})

export class GameInfoComponent implements OnInit {

  typeJeu : any[];
  selectedTypeJeu : any;
  isPublic : boolean = false;
  privacy : String = "Publique";
  privacyImg : string = "../../../../assets/images/public.png";
  url : any = '';

  dateSession: string = 'Date de la prochaine session non définie';

  constructor() {
    this.typeJeu = [
      {id:1,nom: 'Donjons & Dragons'},
      {id:2,nom: 'Game of thrones'},
      {id:3,nom: 'Autres'}
    ];
   }

  ngOnInit(): void {
  }

  openAgenda = () =>{
    console.log("agenda open");
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }

  changePrivacy(){
    this.privacyImg = this.privacyImg == "../../../../assets/images/public.png" ? "../../../../assets/images/notpublic.png":"../../../../assets/images/public.png";
    document.getElementById("imgPrivacy").setAttribute("src",this.privacyImg);
    this.privacy = this.privacy == "Publique" ? "Privée" : "Publique";
  }
}
