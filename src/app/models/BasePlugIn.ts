export class BasePlugIn {

    private _nom: string;
    private _config: any;

    constructor(nom:string, config: any) {
        this._nom = nom;
        this._config = config;
    }
    
    public get nom(): string {
        return this._nom;
    }

    public set nom(value: string) {
        this._nom = value;
    }

    public get config(): any {
        return this._config;
    }

    public set config(value: any) {
        this._config = value;
    }
}