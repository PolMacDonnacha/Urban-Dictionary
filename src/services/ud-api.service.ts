import { Injectable, Output } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap,map } from 'rxjs/operators';
import { IUDResponse, WordDetails, Word } from 'src/app/interfaces/UDResponse';
import { WordDetailsComponent } from 'src/app/word-details/word-details.component';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";




@Injectable({
  providedIn: 'root'
})
export class UDApiService {
  wordDataCollection:AngularFirestoreCollection<WordDetails>;
  public words:Word[];
  public wordData:Word;
  public WordDetails:WordDetails;
  private httpOptionsNoAuth:any;
  private _siteURL="https://mashape-community-urban-dictionary.p.rapidapi.com/define";

  constructor(private _http:HttpClient) 
  {
    
    this.httpOptionsNoAuth =
    {
      headers: new HttpHeaders().set('x-rapidapi-key','0115b0a18emsh48238943bae0b20p10c463jsn0d97c23f57ae')
    };
    
   }
   

  getWordData(word:string): Observable<IUDResponse>{
    return this._http.get<IUDResponse>(this._siteURL + "?term=" + word,{headers: this.httpOptionsNoAuth.headers})
    .pipe(
      tap(data => console.log('Worddata/error' + JSON.stringify(data))
    ),
      catchError(this.handleError)
    );
  }
    private handleError(err:HttpErrorResponse) {
      console.log('UDApiService: ', err.message);
      return Observable.throw(err.message);
   }
    
   public getWords()
  {

    return this.words;
 }


  addWords(WordDetails:WordDetails[])
  {
    this.words = [];
//this.wordDataCollection.add(JSON.parse(JSON.stringify(WordDetails[0])));
    WordDetails.forEach(element => {
  this.wordData = new Word(element.word,element.definition,element.author,element.example,element.thumbs_up,element.thumbs_down,element.written_on);
  this.words.push(this.wordData);
});
console.table(this.words);
  }
  
  
  
}
