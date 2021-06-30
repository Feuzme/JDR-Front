export class Session {
    	
    private _id : number;
    private _gameId : number;
    private _name : string;
    private _episode : number;
    private _resume : string;
    private _place : string;
    
    constructor(id: number, gameId: number, name: string, episode: number, resume: string, place: string) {
		this._id = id;
		this._gameId = gameId;
		this._name = name;
		this._episode = episode;
		this._resume = resume;
		this._place = place;
	}

    public get_id(): number {
        return this._id;
    }

    public set_id(_id: number): void {
        this._id = _id;
    }

    public get_gameId(): number {
        return this._gameId;
    }

    public set_gameId(_gameId: number): void {
        this._gameId = _gameId;
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(_name: string): void {
        this._name = _name;
    }

    public get_episode(): number {
        return this._episode;
    }

    public set_episode(_episode: number): void {
        this._episode = _episode;
    }

    public get_resume(): string {
        return this._resume;
    }

    public set_resume(_resume: string): void {
        this._resume = _resume;
    }

    public get_place(): string {
        return this._place;
    }

    public set_place(_place: string): void {
        this._place = _place;
    }
}