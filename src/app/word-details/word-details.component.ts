import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {UDApiService} from 'src/services/ud-api.service';
import { WordDetails } from 'src/app/interfaces/UDResponse';
import {Word} from 'src/app/word.model';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css'],
  providers: [UDApiService]
})
export class WordDetailsComponent implements OnInit {
  @Output()public WordDetails:Word;
   public words:Word[];
  WordList:WordDetails[];

      constructor(private _udService:UDApiService){
        this.getWordDefinition('stonks');
        this.words = this._udService.getWords();
      }

  errormsg:any;
  
   public getWordDefinition(word:string):boolean
  {
    this._udService.getWordData(word).subscribe(
    data => {
        this.WordList = data.list;
        console.table(this.WordList);
      this._udService.addWords(this.WordList);
      },
      error => this.errormsg = <any>error
    );

      return false;
  
  }
  sortedWords():WordDetails[]{
    return this.WordList.sort((a:WordDetails, b:WordDetails) => b.thumbs_up - a.thumbs_up);
  }
  public getWords():boolean
  {
    

    this.words = this._udService.words;
    console.table('getWords' + this.words);
    return false;
 }

  ngOnInit() {
  }

}


