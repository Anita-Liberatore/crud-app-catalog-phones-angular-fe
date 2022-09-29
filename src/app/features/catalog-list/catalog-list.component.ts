import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})
export class CatalogListComponent {

  @Input() devices: Device[] = [];
  @Input() activeDevice: Device | null = null;
  @Output() setActive: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() delete: EventEmitter<Device> = new EventEmitter<Device>();

  deleteHandler(event: MouseEvent, device: Device) {
    event.stopPropagation();
    this.delete.emit(device);
  }

}
