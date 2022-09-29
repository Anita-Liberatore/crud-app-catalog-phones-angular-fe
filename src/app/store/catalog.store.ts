import { Device } from '../model/device';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogStore {
  devices: Device[] = [];
  activeDevice: Device = {} as Device;

  load(devices: Device[]) {
    this.devices = devices;
  }

  add(device: Device) {
    this.devices.push(device);
    this.activeDevice = {} as Device;
  }

  delete(id: number) {
    const index = this.devices.findIndex(d => d.id === id);
    this.devices.splice(index, 1);
    this.activeDevice = {} as Device;
  }

  edit(device: Device) {
    const index = this.devices.findIndex(d => d.id === this.activeDevice?.id);
    this.devices[index] = device;
  }

  setActive(device: Device) {
    this.activeDevice = device;
  }

  reset() {
    this.activeDevice = {} as Device;
  }
}