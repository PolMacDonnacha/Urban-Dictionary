import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WordDetailsComponent } from './word-details/word-details.component';
import { UDApiService } from 'src/services/ud-api.service';
import { AddWordComponent } from './add-word/add-word.component';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireModule} from "@angular/fire";
import { environment } from 'src/environments/environment';
import {WordDatabaseService} from 'src/app/services/word-database.service'



@NgModule({
  declarations: [
    AppComponent,
    WordDetailsComponent,
    AddWordComponent
    
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule
  ],
  exports: [WordDetailsComponent],
  providers: [UDApiService,WordDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
