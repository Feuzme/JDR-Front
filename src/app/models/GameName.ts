export class GameName {

    private _id: number;
    private _name: string;
    
	constructor(id: number, name: string) {
		this._id = id;
		this._name = name;
	}

    public get id(): number {
        return this._id;
    }

    public set id(_id: number) {
        this._id = _id;
    }

    public get name(): string {
        return this._name;
    }

    public set name(_name: string) {
        this._name = _name;
    }

}