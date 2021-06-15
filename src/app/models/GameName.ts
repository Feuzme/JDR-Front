export class name {

    private _id: number;
    private _name: string;
    
	constructor(id: number, name: string) {
		this._id = id;
		this._name = name;
	}

    public get_id(): number {
        return this._id;
    }

    public set_id(_id: number): void {
        this._id = _id;
    }

    public get_name(): string {
        return this._name;
    }

    public set_name(_name: string): void {
        this._name = _name;
    }

}