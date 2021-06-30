export class GameType {

    private id: number;
    private nom: string;	
    private logo: string; 
   
	constructor(id: number, nom: string, logo : string) {
		this.id = id;
		this.nom = nom;
        this.logo = logo;
	}

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNom(): string	 {
        return this.nom;
    }

    public setNom(nom: string): void {
        this.nom = nom;
    }

    public getLogo(): string {
        return this.logo;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }
}