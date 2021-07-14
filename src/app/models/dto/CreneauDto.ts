import { GameIdDto } from "./GameIdDto";
import { UserIdDto } from "./UserIdDto";

export class CreneauDto {
    public dateDeb: string;
    public dateFin: string;
    public prochaineSession: boolean;
    public user: UserIdDto;
    public game : GameIdDto;

    constructor(
        dateDeb: string,
        dateFin: string,
        prochaineSession: boolean,
        user: UserIdDto,
        game:GameIdDto) {
        this.dateDeb = dateDeb;
        this.dateFin = dateFin;
        this.prochaineSession = prochaineSession;
        this.user = user;
        this.game = game;
    }
}