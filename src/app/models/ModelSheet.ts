import { BasicUser } from './BasicUser';
import { PlugIn } from "./PlugIn";

export class ModelSheet {
    private id: string;	    
	private name: string;	    
	private isPublic: boolean;    
	private user: BasicUser;    
	private composants: string[];
    
    constructor(id : string, name : string, isPublic : boolean, user : BasicUser, composants : string[]){
        this.id = id;
        this.name = name;
        this.isPublic = isPublic;
        this.user = user;
        this.composants = composants;
    }    

    public getComposants(): string[] {
        return this.composants;
    }
    public setComposants(value: string[]) {
        this.composants = value;
    }
    public getUser(): BasicUser {
        return this.user;
    }
    public setUser(value: BasicUser) {
        this.user = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string) {
        this.name = value;
    }
    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    }
    public getIsPublic(): boolean {
        return this.isPublic;
    }
    public setIsPublic(value: boolean) {
        this.isPublic = value;
    }
}