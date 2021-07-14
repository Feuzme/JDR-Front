import { GameTypeDto } from "./GameTypeDto";
import { UserIdDto } from "./UserIdDto";

export class GameDto {
    public id: string;
    public name: string;
    public nbPlayers: number;
    public story: string;
    public isPublic: boolean;
    public mjUser : UserIdDto;
    public gameType : GameTypeDto;
    public listPlayers : UserIdDto[];

    constructor(
        name: string,
        nbPlayers: number,
        trame: string,
        isPublic: boolean,
        mjUser: UserIdDto,
        gameType: GameTypeDto,
        listPlayers: UserIdDto[]) {
        this.name = name;
        this.nbPlayers = nbPlayers;
        this.story = trame;
        this.isPublic = isPublic;
        this.mjUser = mjUser;
        this.gameType = gameType;
        this.listPlayers = listPlayers;
    }

}