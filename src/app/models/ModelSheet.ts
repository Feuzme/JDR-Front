import { UserIdDto } from './dto/UserIdDto';
import { PlugInIdDto } from './dto/PlugInIdDto';

export class ModelSheet {
    private id: string;	    
	private name: string;	    
	private isPublic: boolean;    
	private user: UserIdDto;    
	private composants: PlugInIdDto[];
    
    constructor(id : string, name : string, isPublic : boolean, user : UserIdDto, composants : PlugInIdDto[]){
        this.id = id;
        this.name = name;
        this.isPublic = isPublic;
        this.user = user;
        this.composants = composants;
    }    

    public getComposants(): PlugInIdDto[] {
        return this.composants;
    }
    public setComposants(value: PlugInIdDto[]) {
        this.composants = value;
    }
    public getUser(): UserIdDto {
        return this.user;
    }
    public setUser(value: UserIdDto) {
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