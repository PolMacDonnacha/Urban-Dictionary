import { Component, OnInit } from '@angular/core';
import { WordDetails ,Word } from '../interfaces/UDResponse';
import { UDApiService } from 'src/services/ud-api.service';
import {WordDatabaseService} from 'src/app/services/word-database.service';
import {DatePipe} from '@angular/common';


@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css'],
  providers: [DatePipe]
})
export class AddWordComponent implements OnInit {

  constructor(private _worddataService:WordDatabaseService) { }

  ngOnInit() {
  }
addTheWord(word: string, definition: string, author: string, example: string ):boolean
{
  let todayDate = new Date();
 let tempWord:WordDetails;
 tempWord = new Word(word,definition,author,example,0,0,todayDate.toISOString());
 console.table('tempword' + tempWord);
 this._worddataService.addWordData(tempWord);

  return false;
}

}
