import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { MyaccountbuyerComponent } from './components/myaccountbuyer/myaccountbuyer.component';
import { MyaccountsellerComponent } from './components/myaccountseller/myaccountseller.component';
import { HeaderbuyerComponent } from './components/headerbuyer/headerbuyer.component';
import { HeadersellerComponent } from './components/headerseller/headerseller.component';
import { EditaccountbuyerComponent } from './components/editaccountbuyer/editaccountbuyer.component';
import { EditaccountsellerComponent } from './components/editaccountseller/editaccountseller.component';

import {AngularFireStorageModule} from '@angular/fire/storage'
import {AngularFireModule} from '@angular/fire'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    ContactComponent,
    MyaccountbuyerComponent,
    MyaccountsellerComponent,
    HeaderbuyerComponent,
    HeadersellerComponent,
    EditaccountbuyerComponent,
    EditaccountsellerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAYsXEKw9iqkrLxKgItK3_BxS94pWyLY9I",
      authDomain: "alampat-59bb8.firebaseapp.com",
      projectId: "alampat-59bb8",
      storageBucket: "alampat-59bb8.appspot.com",
      messagingSenderId: "42190675269",
      appId: "1:42190675269:web:4d4f246a30fb3b380df22c",
      measurementId: "G-M7VWRJ4WN7"
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
