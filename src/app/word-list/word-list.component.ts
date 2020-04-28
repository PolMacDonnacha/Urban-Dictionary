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
 
public Word: Word;



  constructor(private _udService:UDApiService) {
      }
  ngOnInit() {
   
  }
  
}
