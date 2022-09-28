import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from 'src/app/model/device';
import { NgForm } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  devices: Device[] = [];
  activeDevice: Device | null = null;
  
  constructor(private http: HttpClient) { 
    this.getAll();
  }

  getAll() {
    this.http.get<Device[]>('http://localhost:3000/devices')
      .subscribe(result => this.devices = result);
  }

  deleteHandler(device: Device) {
    this.http.delete(`http://localhost:3000/devices/${device.id}`).subscribe(() => {
      const index = this.devices.findIndex(d => d.id === device.id)
      this.devices.splice(index,1)
    })
  }

  save(form: NgForm) {
    if(this.activeDevice) {
      return this.edit(form);
    }
    console.log(form.value)

    this.add(form)
  }

  setActive(device: Device) {
    this.activeDevice = device;
  }

  add(form: NgForm) {
    this.http.post<Device>(`http://localhost:3000/devices/`, form.value)
      .subscribe(result => {
        this.devices.push(result);
        this.activeDevice = null;
        form.reset();
      });
  }

  edit(form: NgForm) {
    this.http.patch<Device>(`http://localhost:3000/devices/${this.activeDevice?.id}`, form.value)
      .subscribe(result => {
        const index = this.devices.findIndex(d => d.id === this.activeDevice?.id)
        this.devices[index] = result;
      });
  }

  reset(form: NgForm) {
    this.activeDevice = null;
    form.reset();
  }
}
