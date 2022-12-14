import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CatalogListComponent } from './features/catalog-list/catalog-list.component';
import { CatalogFormComponent } from './features/catalog-form/catalog-form.component';
import { CatalogService } from './services/catalog.service';
import { CatalogStore } from './store/catalog.store';
import { IconComponent } from './features/icon/icon.component';
import { CardComponent } from './shared/components/card/card.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    CatalogListComponent,
    CatalogFormComponent,
    IconComponent,
    CardComponent,
    NavbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CatalogService, CatalogStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
