import { GridsterItem } from 'angular-gridster2';
import { GameName } from "./GameName";

export class PlugIn {
    private _name: string;
    private _author: string;       
    private _game: GameName; 	
    private _positionSize : GridsterItem;
    // private _config : String;

	constructor($name: string, $author: string, $game: GameName, $positionSize: GridsterItem) {
		this._name = $name;
		this._author = $author;
		this._game = $game;
    }

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get author(): string {
		return this._author;
	}

	public set author(value: string) {
		this._author = value;
	}

	public get game(): GameName {
		return this._game;
	}

	public set game(value: GameName) {
		this._game = value;
	}    

	public get positionSize(): GridsterItem {
		return this._positionSize;
	}
	public set positionSize(value: GridsterItem) {
		this._positionSize = value;
	}
} 