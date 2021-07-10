import { GameType } from "./GameType";
import { User } from "./user";

export class Game {
    private id: string;
    private name: string;
    private nbPlayers: number;
    private story: string;
    private logo: string;
    private isPublic: boolean;
    private status: string;
    private mjUser : User;
    private gameType : GameType;
    private listPlayers : String[];

    constructor(
        name: string,
        nbPlayers: number,
        trame: string,
        logo: string,
        isPublic: boolean,
        status: string,
        mjUser: User,
        gameType: GameType,
        listPlayers: String[]) {
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

    public getId(): string {
        return this.id;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getNbPlayers(): number {
        return this.nbPlayers;
    }

    public setNbPlayers(nbPlayers: number): void {
        this.nbPlayers = nbPlayers;
    }

    public getStory(): string {
        return this.story;
    }

    public setStory(story: string): void {
        this.story = story;
    }

    public getLogo(): string {
        return this.logo;
    }

    public setLogo(logo: string): void {
        this.logo = logo;
    }

    public isIsPublic(): boolean {
        return this.isPublic;
    }

    public setIsPublic(isPublic: boolean): void {
        this.isPublic = isPublic;
    }

    public getStatus(): string {
        return this.status;
    }

    public setStatus(status: string): void {
        this.status = status;
    }

    public getMjUser(): User {
        return this.mjUser;
    }

    public setMjUser(mjUser: User): void {
        this.mjUser = mjUser;
    }

    public getGameType(): GameType {
        return this.gameType;
    }

    public setGameType(gameType: GameType): void {
        this.gameType = gameType;
    }

    public getListPlayers(): String[] {
        return this.listPlayers;
    }

    public setListPlayers(listPlayers: String[]): void {
        this.listPlayers = listPlayers;
    }

}