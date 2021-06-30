export class Sheet {
    
    private _id: number;    
    private _name: string;
    private _isPublic: boolean; 

    constructor(id: number, name: string, isPublic: boolean) {
        this._id = id;
        this._name = name;
        this._isPublic = isPublic;
    }

    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Getter isPublic
     * @return {boolean}
     */
	public get isPublic(): boolean {
		return this._isPublic;
	}

    /**
     * Setter isPublic
     * @param {boolean} value
     */
	public set isPublic(value: boolean) {
		this._isPublic = value;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}
}