export class BasePlugIn {

    private _name: string;
    private _config: any;

    constructor(nom:string, config: any) {
        this._name = nom;
        this._config = config;
    }
    
    public get nom(): string {
        return this._name;
    }

    public set nom(value: string) {
        this._name = value;
    }

    public get config(): any {
        return this._config;
    }

    public set config(value: any) {
        this._config = value;
    }
}