import {
  Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { DataManager } from '../ng-crud-table/base/data-manager';
import { DynamicFormElement } from '../dynamic-form/dynamic-form-element';
import { GetOptionsFunc } from '../dynamic-form/types';
import { KeyValuePair } from '../row-view/types';

@Component({
  selector: 'app-modal-edit-form',
  templateUrl: './modal-edit-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalEditFormComponent implements OnInit {

  @Input() dataManager: DataManager;
  @Input() isNewItem: boolean;
  @Input() detailView: boolean;

  @Output() loaded: EventEmitter<any> = new EventEmitter();

  @ViewChild('childModal', { static: false }) childModal: ModalComponent;

  dynElements: DynamicFormElement[];
  formValid = true;
  transposedData: KeyValuePair[];
  getOptionsFunc: GetOptionsFunc;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void  {
    this.getOptionsFunc = this.dataManager.service.getOptions.bind(this.dataManager.service);
  }

  get modalTitle(): string {
    if (!this.detailView) {
      return this.isNewItem ? this.dataManager.messages.titleCreate :
        this.dataManager.messages.titleUpdate;
    } else {
      return this.dataManager.messages.titleDetailView;
    }
  }

  save(): void  {
    if (this.isNewItem) {
      this.dataManager.service.getItem(this.dataManager.item).then(item => {
        if (!item) {
          this.dataManager.create(this.dataManager.item);
          this.childModal.hide();
          this.cd.markForCheck();
        } else {
          alert(this.dataManager.messages.pkError);          
        }
      }).catch(e => console.error(e)); 
    } else {
      this.dataManager.update(this.dataManager.item);
      this.childModal.hide();
      this.cd.markForCheck();
    }
  }

  open(): void  {
    this.createDynamicFormElements();
    this.childModal.show();
    this.cd.markForCheck();
  }

  close(): void  {
    this.childModal.hide();
    this.cd.markForCheck();
  }

  onFormValid(event: any): void  {
    this.formValid = event;
  }

  createDynamicFormElements(): void  {
    const temp: DynamicFormElement[] = [];
    const tempDetailView: KeyValuePair[] = [];

    for (const column of this.dataManager.columns) {
      const element = new DynamicFormElement();
      element.name = column.name;
      element.title = column.title;
      element.options = column.options;
      element.optionsUrl = column.optionsUrl;
      element.type = column.type;
      element.validatorFunc = column.validatorFunc;
      element.dependsElement = column.dependsColumn;
      element.cellTemplate = column.formTemplate ? column.formTemplate : column.cellTemplate;
      element.hidden = column.formHidden;
      element.keyElement = column.keyColumn;
      element.disableOnEdit = column.formDisableOnEdit;
	  element.widthInGridColumns=column.widthInGridColumns;
      temp.push(element);
      tempDetailView.push({ key: column.title, value: column.getValueView(this.dataManager.item) });
    }
    this.dynElements = temp;
    this.transposedData = tempDetailView;
  }

}
