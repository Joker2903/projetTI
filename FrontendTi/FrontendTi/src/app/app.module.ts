import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddGiftComponent } from './gift/add-gift/add-gift.component';
import { AddClientComponent } from './client/add-client/add-client.component';
import { AddConditionComponent } from './condition/add-condition/add-condition.component';

@NgModule({
  declarations: [AppComponent, AddGiftComponent, AddClientComponent, AddConditionComponent],
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
export class AppModule {}
