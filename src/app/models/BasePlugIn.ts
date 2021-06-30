import { GameName } from "./GameName";
import { PositionSize } from "./PositionSize";

export class BasePlugIn {

    private _name: string;
    private _config: any;

    constructor(name:string, config: any, author : string, game : GameName, gamePic : string, positionSize : PositionSize) {
        this._name = name;
        this._config = config;
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
}