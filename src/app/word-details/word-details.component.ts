import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {UDApiService} from 'src/services/ud-api.service';
import { IUDResponse,WordDetails } from 'src/app/interfaces/UDResponse';
import { WordListComponent } from '../word-list/word-list.component';
import {Word} from 'src/app/word.model';


@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css'],
  providers: [UDApiService]
})
export class WordDetailsComponent implements OnInit {
  public list:IUDResponse[];
  public WordDetails:WordDetails[];
  words = [];
  public wordData:Word;


  /*@Output()wordData :EventEmitter<WordDetails[]>;
  constructor(private _udService:UDApiService) {
      this.wordData = new EventEmitter();*/
      constructor(private _udService:UDApiService){
        console.log('WordData ' + this.getWordDefinition('lol'));

      }

  // }
  
  errormsg:any;
  
   public getWordDefinition(word:string):boolean
  {
    this._udService.getWordData(word).subscribe(
    data => {
      this.WordDetails = data.list;
     
    
        console.log('Definition 1: ' + this.WordDetails[0].definition);
        this.words = [];
        this._udService.separateDefinitions(this.WordDetails);
        this.words.push(new Word(this.WordDetails[0].word,this.WordDetails[0].definition,this.WordDetails[0].author,this.WordDetails[0].thumbs_up,this.WordDetails[0].thumbs_down,this.WordDetails[0].example,this.WordDetails[0].written_on));
    console.log(this.WordDetails[0].word);
      },
      error => this.errormsg = <any>error
    );
      return false;
  }

  ngOnInit() {
    this.words = this._udService.getWords();
    console.log('WordList nGOnInit ' + this.words);
  }
}

