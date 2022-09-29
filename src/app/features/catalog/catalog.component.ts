import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/catalog.service';
import { CatalogStore } from 'src/app/store/catalog.store';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  constructor(public catalogService: CatalogService, public catalogStore: CatalogStore) {
    catalogService.getAll();
    
  }
}