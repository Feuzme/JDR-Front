import { Game } from "./Game";
import { User } from "./user";

export class Creneau {
    public id: string;
    public dateDeb: string;
    public dateFin: string;
    public prochaineSession: boolean;
    public user: User;
    public game : Game;

    constructor(
        dateDeb: string,
        dateFin: string,
        prochaineSession: boolean,
        user: User,
        game:Game) {
        this.dateDeb = dateDeb;
        this.dateFin = dateFin;
        this.prochaineSession = prochaineSession;
        this.user = user;
        this.game = game;
    }
}