export class GameType {

    private id: string;
    private name: string;	
    private logo: string;  

    constructor(id: string, name: string, gamePic : string) {
		this.id = id;
		this.name = name;
        this.logo = gamePic;
	}

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string	 {
        return this.name;
    }

    public setName(name: string	): void {
        this.name = name;
    }

    public getGamePic(): string {
        return this.logo;
    }

    public setGamePic(gamePic: string): void {
        this.logo = gamePic;
    }
}