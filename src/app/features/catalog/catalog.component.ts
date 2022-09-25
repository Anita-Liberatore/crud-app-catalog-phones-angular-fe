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
}
