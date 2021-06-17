export class PositionSize {

    private _x: number;
    private _y: number;
    private _height: number;
    private _width: number;

    constructor(x: number, y: number, height: number, width: number) {
        this._x = x;
        this._y = y;
        this._height = height;
        this._width = width;
    }

    public get_x(): number {
        return this._x;
    }

    public set_x(_x: number): void {
        this._x = _x;
    }

    public get_y(): number {
        return this._y;
    }

    public set_y(_y: number): void {
        this._y = _y;
    }

    public get_height(): number {
        return this._height;
    }

    public set_height(_height: number): void {
        this._height = _height;
    }

    public get_width(): number {
        return this._width;
    }

    public set_width(_width: number): void {
        this._width = _width;
    }

}