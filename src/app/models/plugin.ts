export class PlugIn {
    private _author: string;    
    private _name: string;    
    private _game: string;
    private _gamePic: string;      
    private _width: number;    
    private _height: number;
        

    constructor(author: string, name: string, game: string, gamePic: string, width: number, height: number,) {
        this._author = author;
        this._name = name;
        this._game = game;
        this._gamePic = gamePic;
        this._width = width;
        this._height = height;
    }

    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }

    public get game(): string {
        return this._game;
    }
    public set game(value: string) {
        this._game = value;
    }

    public get gamePic(): string {
        return this._gamePic;
    }
    public set gamePic(value: string) {
        this._gamePic = value;
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}