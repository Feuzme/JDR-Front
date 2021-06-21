import { GameName } from "./GameName";
import { PositionSize } from "./PositionSize";

export class BasePlugIn {

    private _name: string;
    private _config: any;
    private _author: string;       
    private _game: GameName;
    private _gamePic: string;    
    private _positionSize : PositionSize;

    constructor(name:string, config: any, author : string, game : GameName, gamePic : string, positionSize : PositionSize) {
        this._name = name;
        this._config = config;
        this._author = author;
        this._game = game;
        this._gamePic = gamePic;
        this._positionSize = positionSize;
    }
    
    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get config(): any {
        return this._config;
    }

    public set config(value: any) {
        this._config = value;
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

    public get gamePic(): string {
        return this._gamePic;
    }
    public set gamePic(value: string) {
        this._gamePic = value;
    }

	public get positionSize(): PositionSize {
		return this._positionSize;
	}
	public set positionSize(value: PositionSize) {
		this._positionSize = value;
	}
}