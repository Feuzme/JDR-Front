import { BasePlugIn } from "./BasePlugin";
import { User } from "./user";

export class ModelSheet {
    private _id: string;	    
	private _name: string;	    
	private _isPublic: boolean;    
	private _user: User;    
	private _composants: BasePlugIn[];
    
    constructor(id : string, name : string, isPublic : boolean, user : User, composants : BasePlugIn[]){
        this._id = id;
        this._name = name;
        this._isPublic = isPublic;
        this._user = user;
        this.composants = composants;
    }    

    public get composants(): BasePlugIn[] {
        return this._composants;
    }
    public set composants(value: BasePlugIn[]) {
        this._composants = value;
    }
    public get user(): User {
        return this._user;
    }
    public set user(value: User) {
        this._user = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get id(): string {
        return this._id;
    }
    public set id(value: string) {
        this._id = value;
    }
    public get isPublic(): boolean {
        return this._isPublic;
    }
    public set isPublic(value: boolean) {
        this._isPublic = value;
    }
}