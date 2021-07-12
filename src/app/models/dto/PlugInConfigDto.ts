export class PlugInConfigDto {
    id: string;
    config: Object;
    constructor($id: string, $config: Object) {
        this.id = $id;
        this.config = $config;
    }
}