export class Session {
    	
    private id : String;
    private gameId : number;
    private name : string;
    private episode : number;
    private resume : string;
    private place : string;
    
    constructor(id: String, gameId: number, name: string, episode: number, resume: string, place: string) {
		this.id = id;
		this.gameId = gameId;
		this.name = name;
		this.episode = episode;
		this.resume = resume;
		this.place = place;
	}

    public getId(): String {
        return this.id;
    }

    public setId(id: String): void {
        this.id = id;
    }

    public getGameId(): number {
        return this.gameId;
    }

    public setGameId(gameId: number): void {
        this.gameId = gameId;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getEpisode(): number {
        return this.episode;
    }

    public set_episode(episode: number): void {
        this.episode = episode;
    }

    public getResume(): string {
        return this.resume;
    }

    public set_resume(resume: string): void {
        this.resume = resume;
    }

    public get_place(): string {
        return this.place;
    }

    public set_place(place: string): void {
        this.place = place;
    }
}