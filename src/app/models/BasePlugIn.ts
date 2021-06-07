export class BasePlugIn {

    private _nom: string;
    private _balise: any;
    private _columnSize: string;

    constructor(nom:string, balise: any, columnSize: string) {
        this._nom = nom;
        this._balise = balise;
        this._columnSize = columnSize;
    }
    
    public get nom(): string {
        return this._nom;
    }

    public set nom(value: string) {
        this._nom = value;
    }

    public get balise(): any {
        return this._balise;
    }

    public set balise(value: any) {
        this._balise = value;
    }

    public get columnSize(): string {
        return this._columnSize;
    }

    public set columnSize(value: string) {
        this._columnSize = value;
    }
}