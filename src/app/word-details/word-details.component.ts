import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {UDApiService} from 'src/services/ud-api.service';
import { IUDResponse,WordDetails } from 'src/app/interfaces/UDResponse';
import { WordListComponent } from '../word-list/word-list.component';
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
  @Input()  public wordData:Word;
  public words:Word[];
  WordList:WordDetails[];

      constructor(private _udService:UDApiService){
        this.getWordDefinition('stonks');
       this.words = this._udService.getWords();
       console.log('constructor wordsArray: ' + this._udService.getWords());
      }

  errormsg:any;
  
   public getWordDefinition(word:string):boolean
  {
    this._udService.getWordData(word).subscribe(
    data => {
        this.WordList = data.list;
      this._udService.addWords(this.WordList);
      },
      error => this.errormsg = <any>error
    );

      return false;
  
  }

  ngOnInit() {
    console.log('wordlist getwords' + this._udService.getWords());
    this._udService.getWords();
}
}

