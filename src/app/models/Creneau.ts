import { Game } from "./Game";
import { Session } from "./Session";
import { User } from "./user";

export class Creneau {
    public id: string;
    public dateDeb: Date;
    public dateFin: Date;
    public frequence: number;
    public prochaineSession: boolean;
    public user: User;
    public game : Game;

    constructor(
        dateDeb: Date,
        dateFin: Date,
        frequence: number,
        prochaineSession: boolean,
        user: User,
        game:Game) {
        this.dateDeb = dateDeb;
        this.dateFin = dateFin;
        this.frequence = frequence;
        this.prochaineSession = prochaineSession;
        this.user = user;
        this.game = game;
    }

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getDateDeb(): Date {
        return this.dateDeb;
    }

    public setDateDeb(dateDeb: Date): void {
        this.dateDeb = dateDeb;
    }

    public getDateFin(): Date {
        return this.dateFin;
    }

    public setDateFin(dateFin: Date): void {
        this.dateFin = dateFin;
    }

    public getFrequence(): number {
        return this.frequence;
    }

    public setFrequence(frequence: number): void {
        this.frequence = frequence;
    }

    public isProchaineSession(): boolean {
        return this.prochaineSession;
    }

    public setProchaineSession(prochaineSession: boolean): void {
        this.prochaineSession = prochaineSession;
    }

    public getUser(): User {
        return this.user;
    }

    public setUser(user: User): void {
        this.user = user;
    }    
}