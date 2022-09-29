import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/model/device';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  devices: Device[] = [];
  activeDevice: Device = {};
  
  constructor(private http: HttpClient) { 
    this.getAll();
  }

  getAll() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe(result => this.devices = result);
  }


  save(device: Device) {
    if (this.activeDevice?.id) {
      this.edit(device);
    } else {
      this.add(device);
    }
  }

  add(device: Device) {
    this.http.post<Device>(`http://localhost:3000/devices/`, device)
      .subscribe(result => {
        this.devices.push(result);
        this.activeDevice = {} as Device;
      });
  }

  deleteHandler(device: Device) {
    this.http.delete(`http://localhost:3000/devices/${device.id}`)
      .subscribe(() => {
        const index = this.devices.findIndex(d => d.id === device.id);
        this.devices.splice(index, 1);
      });
  }

  edit(device: Device) {
    this.http.patch<Device>(`http://localhost:3000/devices/${this.activeDevice?.id}`, device)
      .subscribe(res => {
        const index = this.devices.findIndex(d => d.id === this.activeDevice?.id);
        this.devices[index] = res;
      });
  }

  setActive(device: Device) {
    this.activeDevice = device;
  }

  reset() {
    this.activeDevice = {};
  }
}
