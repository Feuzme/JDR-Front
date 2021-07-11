export class GameType {

    public id: string;
    public name: string;	
    public logo: string;  

    constructor(id: string, name: string, gamePic : string) {
		this.id = id;
		this.name = name;
        this.logo = gamePic;
	}
}