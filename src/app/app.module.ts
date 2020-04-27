import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WordListComponent } from './word-list/word-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WordDetailsComponent } from './word-details/word-details.component';
import { UDApiService } from 'src/services/ud-api.service';
import { AddWordComponent } from './add-word/add-word.component';



@NgModule({
  declarations: [
    AppComponent,
    WordListComponent,
    WordDetailsComponent,
    AddWordComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  exports: [WordDetailsComponent],
  providers: [UDApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
