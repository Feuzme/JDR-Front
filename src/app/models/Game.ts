export class Game {
    private _id: string;
    private _name: string;
    private _nbPlayers: number;
    private _story: string;
    private _logo: string;
    private _isPublic: boolean;
    private _status: string;


    constructor(
        name: string,
        nbPlayers: number,
        trame: string,
        logo: string,
        isPublic: boolean,
        status: string) {
        this._name = name;
        this._nbPlayers = nbPlayers;
        this._story = trame;
        this._logo = logo;
        this._isPublic = isPublic;
        this._status = status;
    }

    public get_id(): string {
        return this._id;
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(_name: string): void {
        this._name = _name;
    }

    public get_nbPlayers(): number {
        return this._nbPlayers;
    }

    public set_nbPlayers(_nbPlayers: number): void {
        this._nbPlayers = _nbPlayers;
    }

    public get_trame(): string {
        return this._story;
    }

    public set_trame(_trame: string): void {
        this._story = _trame;
    }

    public get_logo(): string {
        return this._logo;
    }

    public set_logo(_logo: string): void {
        this._logo = _logo;
    }

    public is_public(): boolean {
        return this._isPublic;
    }

    public set_public(_isPublic: boolean): void {
        this._isPublic = _isPublic;
    }

    public get_status(): string {
        return this._status;
    }

    public set_status(_status: string): void {
        this._status = _status;
    }
}