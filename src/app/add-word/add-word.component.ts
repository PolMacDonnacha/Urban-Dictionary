import { Component, OnInit } from '@angular/core';
import { WordDetails } from '../interfaces/UDResponse';
import { Word } from '../word.model';

@Component({
  selector: 'app-add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.css']
})
export class AddWordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
addTheWord(word: string, definition: string, author: string, example: string ):boolean
{
 let tempWord:WordDetails;
 tempWord = new Word(word,definition,author,0,0,example,"");

  return false;
}

}
