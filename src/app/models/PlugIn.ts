import { GridsterItem } from 'angular-gridster2';
import { GameType } from "./GameType";

export class PlugIn {
	private id : string;
    private nom: string;
    private auteur: string;       
    private gameType: GameType; 	
    private config : Object;

	constructor( $id : string, $nom: string, $author: string, $game: GameType, $config : Object) {
		this.nom = $nom;
		this.auteur = $author;
		this.gameType = $game;
		this.id = $id;
		this.config = $config;
    }

	public getConfig() : Object {
		return this.config;
	}
	public setConfig(value : Object) {
		this.config = value;
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

	public getGame(): GameType {
		return this.gameType;
	}
	public setGame(value: GameType) {
		this.gameType = value;
	}    
} 