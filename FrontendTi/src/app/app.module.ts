import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGiftComponent } from './gift/add-gift/add-gift.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddConditionComponent } from './condition/add-condition/add-condition.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { DetailClientComponent } from './client/detail-client/detail-client.component';
import { HeaderComponent } from './common/header/header.component';
import { SingleClientComponent } from './client/single-client/single-client.component';
import { SigninComponent } from './signin/signin.component';
import { DetailConditionComponent } from './condition/detail-condition/detail-condition.component';
import { ListConditionComponent } from './condition/list-condition/list-condition.component';
import { SingleConditionComponent } from './condition/single-condition/single-condition.component';
import { DetailGiftComponent } from './gift/detail-gift/detail-gift.component';
import { ListGiftComponent } from './gift/list-gift/list-gift.component';
import { SingleGiftComponent } from './gift/single-gift/single-gift.component';

@NgModule({
  declarations: [AppComponent, AddGiftComponent, AddClientComponent, AddConditionComponent, ListClientComponent, DetailClientComponent, HeaderComponent, SingleClientComponent, SigninComponent, DetailConditionComponent, ListConditionComponent, SingleConditionComponent, DetailGiftComponent, ListGiftComponent, SingleGiftComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
