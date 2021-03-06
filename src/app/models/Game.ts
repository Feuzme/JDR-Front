import { GameType } from "./GameType";
import { User } from "./user";

export class Game {
    public id: string;
    public name: string;
    public nbPlayers: number;
    public story: string;
    public isPublic: boolean;
    public mjUser : User;
    public gameType : GameType;
    public listPlayers : User[];

    constructor(
        name: string,
        nbPlayers: number,
        trame: string,
        isPublic: boolean,
        mjUser: User,
        gameType: GameType,
        listPlayers: User[]) {
        this.name = name;
        this.nbPlayers = nbPlayers;
        this.story = trame;
        this.isPublic = isPublic;
        this.mjUser = mjUser;
        this.gameType = gameType;
        this.listPlayers = listPlayers;
    }

}