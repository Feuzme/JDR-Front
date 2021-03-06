import { User } from './user';
import { PlugIn } from './PlugIn';

export class ModelSheet {
    private id: string;	    
	private name: string;	    
	private isPublic: boolean;    
	private user: User;    
	private composants: PlugIn[];
    
    constructor(id : string, name : string, isPublic : boolean, user : User, composants : PlugIn[]){
        this.id = id;
        this.name = name;
        this.isPublic = isPublic;
        this.user = user;
        this.composants = composants;
    }    

    public getComposants(): PlugIn[] {
        return this.composants;
    }
    public setComposants(value: PlugIn[]) {
        this.composants = value;
    }
    public getUser(): User {
        return this.user;
    }
    public setUser(value: User) {
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