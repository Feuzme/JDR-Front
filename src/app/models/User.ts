export class User {

    public  id : string;
	public nom : string;
	public email : string;
	public password : string;
	public avatar : string;
	public bio : string;
	public ville : string;
    public loggedIn : boolean;

    constructor (id : string , nom : string , 
        email : string, password : string, 
        avatar : string, bio : string,
        ville : string,  loggedIn : boolean){
        this.id = id;
        this.nom = nom;
        this.email = email;
        this.password = password;
        this.avatar = avatar;
        this.bio = bio;
        this.ville = ville;
        this.loggedIn = false;        
    }
}