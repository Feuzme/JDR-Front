import { GridsterItem } from 'angular-gridster2';
import { GameName } from "./GameName";

export class PlugIn {
	private id : string;
    private nom: string;
    private auteur: string;       
    private gameType: GameName; 	
    private positionSize : GridsterItem;
    // private _config : String;

	constructor( $id : string, $nom: string, $author: string, $game: GameName, $positionSize: GridsterItem) {
		this.nom = $nom;
		this.auteur = $author;
		this.gameType = $game;
		this.id = $id;
    }

	public getId() :string {
		return this.id;
	}
	public setId(value : string){
		this.id = value;
	}

	public getNom(): string {
		return this.nom;
	}

	public setNom(value: string) {
		this.nom = value;
	}

	public getAuteur(): string {
		return this.auteur;
	}

	public setAuteur(value: string) {
		this.auteur = value;
	}

	public getGame(): GameName {
		return this.gameType;
	}

	public setGame(value: GameName) {
		this.gameType = value;
	}    

	public getPositionSize(): GridsterItem {
		return this.positionSize;
	}
	public setPositionSize(value: GridsterItem) {
		this.positionSize = value;
	}
} 