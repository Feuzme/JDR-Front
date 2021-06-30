import { Session } from "./Session";
import { User } from "./user";

export class Creneau {
    private id: string;
    private dateDeb: Date;
    private dateFin: Date;
    private frequence: number;
    private prochaineSession: boolean;
    private user: User;
    private session : Session;

    constructor(
        dateDeb: Date,
        dateFin: Date,
        frequence: number,
        prochaineSession: boolean,
        user: User,
        session: Session) {
        this.dateDeb = dateDeb;
        this.dateFin = dateFin;
        this.frequence = frequence;
        this.prochaineSession = prochaineSession;
        this.user = user;
        this.session = session;
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

    public getSession(): Session {
        return this.session;
    }

    public setSession(session: Session): void {
        this.session = session;
    }
    
}