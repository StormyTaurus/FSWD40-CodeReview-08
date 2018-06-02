import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { HeroComponent } from './hero/hero.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyB9_7N32G1dVc6jTuX0Y0KjdNAUzOjUV3w',
  authDomain: 'datingappdata.firebaseapp.com',
  databaseURL: 'https://datingappdata.firebaseio.com',
  projectId: 'datingappdata',
  storageBucket: 'datingappdata.appspot.com',
  messagingSenderId: '76997266933'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
 })

export class AppModule { }
