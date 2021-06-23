import { GameName } from "./GameName";
import { PositionSize } from "./PositionSize";

export class PlugIn {
    private _name: string;
    private _author: string;       
    private _game: GameName;  
    private _positionSize : PositionSize;
    private _config : String;

	constructor($name: string, $author: string, $game: GameName, $positionSize: PositionSize) {
		this._name = $name;
		this._author = $author;
		this._game = $game;
		this._positionSize = $positionSize;
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

	public get positionSize(): PositionSize {
		return this._positionSize;
	}

	public set positionSize(value: PositionSize) {
		this._positionSize = value;
	}

    public get config(): String {
		return this._config;
	}

	public set config(value: String) {
		this._config = value;
	}
} 