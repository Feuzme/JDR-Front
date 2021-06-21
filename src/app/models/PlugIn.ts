import { GameName } from "./GameName";
import { PositionSize } from "./PositionSize";

export class PlugIn {
    private _name: string;
    private _author: string;       
    private _game: GameName;
    private _gamePic: string;    
    private _positionSize : PositionSize;

	constructor($name: string, $author: string, $game: GameName, $gamePic: string, $positionSize: PositionSize) {
		this._name = $name;
		this._author = $author;
		this._game = $game;
		this._gamePic = $gamePic;
		this._positionSize = $positionSize;
    }
    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Getter author
     * @return {string}
     */
	public get author(): string {
		return this._author;
	}

    /**
     * Setter author
     * @param {string} value
     */
	public set author(value: string) {
		this._author = value;
	}

    /**
     * Getter game
     * @return {GameName}
     */
	public get game(): GameName {
		return this._game;
	}

    /**
     * Setter game
     * @param {GameName} value
     */
	public set game(value: GameName) {
		this._game = value;
	}

    /**
     * Getter gamePic
     * @return {string}
     */
	public get gamePic(): string {
		return this._gamePic;
	}

    /**
     * Setter gamePic
     * @param {string} value
     */
	public set gamePic(value: string) {
		this._gamePic = value;
	}

    /**
     * Getter positionSize
     * @return {PositionSize}
     */
	public get positionSize(): PositionSize {
		return this._positionSize;
	}

    /**
     * Setter positionSize
     * @param {PositionSize} value
     */
	public set positionSize(value: PositionSize) {
		this._positionSize = value;
	}
} 