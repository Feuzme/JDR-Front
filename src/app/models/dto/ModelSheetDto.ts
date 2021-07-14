import { UserIdDto } from './UserIdDto';
import { PlugInIdDto } from './PlugInIdDto';
import { GameTypeDto } from './GameTypeDto';

export class ModelSheetDto {
    private id: string;	    
	private name: string;	    
	private isPublic: boolean;    
	private user: UserIdDto;    
	private composants: PlugInIdDto[];

    
    private gameType : GameTypeDto;
    
    constructor(id : string, name : string, isPublic : boolean, user : UserIdDto, composants : PlugInIdDto[], gameType : GameTypeDto){
        this.id = id;
        this.name = name;
        this.isPublic = isPublic;
        this.user = user;
        this.composants = composants;
        this.gameType = gameType;
    }  
    
	public getGameType(): GameTypeDto {
		return this.gameType;
	}

	public setGameType(value: GameTypeDto) {
		this.gameType = value;
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