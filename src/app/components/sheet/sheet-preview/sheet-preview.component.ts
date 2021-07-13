import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { ModelSheetHttpService } from 'src/app/services/sheet/model-sheet-http.service';
import { LayoutService, IComponent } from '../../../services/sheet/layout.service'
@Component({
  selector: 'app-sheet-preview',
  templateUrl: './sheet-preview.component.html',
  styleUrls: ['./sheet-preview.component.css']
})
export class SheetPreviewComponent implements OnInit {

  displayLoadModal: boolean;
  displaySaveModal: boolean;
  name: string;
  isPublic: string;

  @Output() editingPlugin: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();

  @Input('choiceEditing') choiceEditing: any;

  get options(): GridsterConfig {
    return this.layoutService.options
  }
  get dashboard(): GridsterItem[] {
    return this.layoutService.layout
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }

  constructor(
    private layoutService: LayoutService,
    private modelSheetHttpService: ModelSheetHttpService
  ) { }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.choiceEditing != null && this.choiceEditing.choice == 'delete') {
      this.getLayoutService().removeItem(this.choiceEditing.id);
    }
  }

  saveSheet() {
    this.layoutService.saveSheet(this.name, this.isPublic);
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  getLayoutService() {
    return this.layoutService;
  }

  getModelSheetHttpService() {
    return this.modelSheetHttpService;
  }

  editPlugin = (item) => {
    console.log("editingPlugIn", item);
    this.editingPlugin.emit(item);
  }

  showLoadModal() {
    if (this.displayLoadModal) {
      this.displayLoadModal = false;
    } else {
      this.displayLoadModal = true;
    }
  }

  loadComplete($event){
    this.displayLoadModal = $event;
  }

  showSaveModal() {
    if (!this.displaySaveModal) {
      this.displaySaveModal = true;
    } else {
      this.displaySaveModal = false;
    }
  }
}