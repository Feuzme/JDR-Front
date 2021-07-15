export class BasePlugIn {
    private _id : string;
    private _name: string;
    private _config: any;

    constructor(id:string, name:string, config: any ) {
        this._id = id;
        this._name = name;
        this._config = config;
    }

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
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