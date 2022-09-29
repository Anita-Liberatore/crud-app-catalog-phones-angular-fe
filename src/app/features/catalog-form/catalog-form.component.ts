import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-catalog-form',
  templateUrl: './catalog-form.component.html',
  styleUrls: ['./catalog-form.component.css']
})
export class CatalogFormComponent {

  @Input() activeDevice: Device | null = null;
  @Output() save: EventEmitter<Device> = new EventEmitter<Device>();
  @Output() reset: EventEmitter<NgForm> = new EventEmitter<NgForm>();
  @ViewChild('f') form!: NgForm;

  saveHandler() {
    this.save.emit(this.form.value)
  }

  ngOnChanges(changes: SimpleChanges) {
    const active: Device = changes['activeDevice'].currentValue;
    if (this.form && !active.id) {
      this.form.reset();
    }
  }

  resetHandler() {
    this.reset.emit();
    this.form.reset();
  }

}
