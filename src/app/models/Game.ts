import { GameType } from "./GameType";
import { User } from "./user";

export class Game {
    public id: string;
    public name: string;
    public nbPlayers: number;
    public story: string;
    public logo: string;
    public isPublic: boolean;
    public status: string;
    public mjUser : User;
    public gameType : GameType;
    public listPlayers : User[];

    constructor(
        name: string,
        nbPlayers: number,
        trame: string,
        logo: string,
        isPublic: boolean,
        status: string,
        mjUser: User,
        gameType: GameType,
        listPlayers: User[]) {
        this.name = name;
        this.nbPlayers = nbPlayers;
        this.story = trame;
        this.logo = logo;
        this.isPublic = isPublic;
        this.status = status;
        this.mjUser = mjUser;
        this.gameType = gameType;
        this.listPlayers = listPlayers;
    }

}