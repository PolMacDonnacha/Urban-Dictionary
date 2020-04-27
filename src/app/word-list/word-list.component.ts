import { Component, OnInit, Input } from '@angular/core';
import { UDApiService } from 'src/services/ud-api.service';
import { WordDetails } from 'src/app/interfaces/UDResponse';
import {Word} from 'src/app/word.model';
import { WordDetailsComponent } from '../word-details/word-details.component';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
  providers: [UDApiService]
})
export class WordListComponent implements OnInit {
 
  //list:Definitions;
public words = [];
public Word: Word;
 public wordData:Word;
  @Input() public WordDetails:WordDetails[];
  errormsg:any;
  //@Output() Definitions:Definitions

  constructor(private _udService:UDApiService) {
      this.words = [];
      this.words.push(new Word(this.wordData.word,this.wordData.definition,this.wordData.author,this.wordData.thumbs_up,this.wordData.thumbs_down,this.wordData.example,this.wordData.written_on));
  console.log(this.wordData.word);
    }
  ngOnInit() {
    this.words = this._udService.getWords();
    console.log('WordList nGOnInit ' + this.words);

  }
  
}
