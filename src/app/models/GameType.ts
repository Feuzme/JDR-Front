export class GameType {

    private id: number;
    private name: string;	
    private gamePic: string;  

    constructor(id: number, name: string, gamePic : string) {
		this.id = id;
		this.name = name;
        this.name = gamePic;
	}

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string	 {
        return this.name;
    }

    public setName(name: string	): void {
        this.name = name;
    }

    public getGamePic(): string {
        return this.gamePic;
    }

    public setGamePic(gamePic: string): void {
        this.gamePic = gamePic;
    }
}