export class User {

    private _id : string;
    private _pseudo : string;
    private _mail : string;
    private _pass : string;
    private _avatar : string;
    private _bio : string;
    private _ville : string;
    private _users : User[] = [];
    ///hello world
    ///zerkiugzedfiuygefiiyugzefouygfesfcdvsdfgfdgdfg

	constructor(id: string, pseudo: string, mail: string, pass: string, avatar: string, bio: string, ville: string) {
		this._id = id;
		this._pseudo = pseudo;
		this._mail = mail;
		this._pass = pass;
		this._avatar = avatar;
		this._bio = bio;
		this._ville = ville;
	}

    public get_id(): string {
        return this._id;
    }

    public set_id(_id: string): void {
        this._id = _id;
    }

    public get_pseudo(): string {
        return this._pseudo;
    }

    public set_pseudo(_pseudo: string): void {
        this._pseudo = _pseudo;
    }

    public get_mail(): string {
        return this._mail;
    }

    public set_mail(_mail: string): void {
        this._mail = _mail;
    }

    public get_pass(): string {
        return this._pass;
    }

    public set_pass(_pass: string): void {
        this._pass = _pass;
    }

    public get_avatar(): string {
        return this._avatar;
    }

    public set_avatar(_avatar: string): void {
        this._avatar = _avatar;
    }

    public get_bio(): string {
        return this._bio;
    }

    public set_bio(_bio: string): void {
        this._bio = _bio;
    }

    public get_ville(): string {
        return this._ville;
    }

    public set_ville(_ville: string): void {
        this._ville = _ville;
    }        

    /**
     * Getter users
     * @return {User[] }
     */
	public get users(): User[]  {
		return this._users;
	}

    /**
     * Setter users
     * @param {User[] } value
     */
	public set users(value: User[] ) {
		this._users = value;
	}
}