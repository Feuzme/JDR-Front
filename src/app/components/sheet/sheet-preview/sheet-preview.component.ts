import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import {   GridsterConfig, GridsterItem } from 'angular-gridster2';
import { ModelSheet } from 'src/app/models/ModelSheet';
import { ModelSheetHttpService } from 'src/app/services/sheet/model-sheet-http.service';
import { LayoutService, IComponent } from '../../../services/sheet/layout.service'
@Component({
  selector: 'app-sheet-preview',
  templateUrl: './sheet-preview.component.html',
  styleUrls: ['./sheet-preview.component.css']
})
export class SheetPreviewComponent implements OnInit {

  private currentSheet : ModelSheet;

  @Output() editingPlugin: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();

  @Input('choiceEditing') choiceEditing : any;

  get options(): GridsterConfig {
    return this.layoutService.options
  }
  get dashboard(): GridsterItem[]{
    return this.layoutService.layout
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }
  
  // dashboard: Array<GridsterItem>;
  // layout: GridsterItem[] = [];

  
  constructor(
    private layoutService : LayoutService,
    private modelSheetHttpService : ModelSheetHttpService
    ) { }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    localStorage.setItem("idModelSheet", "60c707faa725dc09dbb6fe1b")

    this.modelSheetHttpService.getById(localStorage.getItem("idModelSheet"))
      .subscribe((data : ModelSheet) => {
        console.log(data);
        this.currentSheet = data;        
      })
    
      console.log(this.currentSheet.id);

    this.layoutService.layout = [
      { cols: 2, rows: 1, y: 2, x: 2, id:1, css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
        }
      },
      { cols: 2, rows: 1, y: 2, x: 2, id:2, css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
        }
      },
      { cols: 2, rows: 1, y: 2, x: 2, id:3, css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
        }
      },
      { cols: 2, rows: 1, y: 2, x: 2, id:4, css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
        }
      },
      { cols: 2, rows: 1, y: 2, x: 2, id:5, css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
        }
      },
      { cols: 1, rows: 1, y: 2, x: 4, id:6, css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
        }
      }];
  }

  ngOnChanges(changes: SimpleChanges): void{
    if(this.choiceEditing != null && this.choiceEditing.choice=='delete'){
      this.getLayoutService().removeItem(this.choiceEditing.id);
    }
  }

  // changedOptions() {
  //   this.options.api.optionsChanged();
  // }
  getLayoutService(){
    return this.layoutService;
  }

  editPlugin = (item) =>{
    this.editingPlugin.emit(item);
  }
}