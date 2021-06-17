export class User {

    public  id : String;
	public nom : String;
	public email : String;
	public password : String;
	public avatar : String;
	public bio : String;
	public ville : String;
    public loggedIn : Boolean;

    constructor (id : String , nom : String , 
        email : String, password : String, 
        avatar : String, bio : String,
        ville : String,  loggedIn : boolean){
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