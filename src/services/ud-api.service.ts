import { Injectable, Output } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap,map } from 'rxjs/operators';
import { IUDResponse, WordDetails } from 'src/app/interfaces/UDResponse';
import { Word } from 'src/app/word.model';



@Injectable({
  providedIn: 'root'
})
export class UDApiService {
  public wordData:Word;
  public WordDetails:WordDetails[];
  public words=[];
  private _udService:UDApiService
  private httpOptionsNoAuth:any;
  private _siteURL="https://mashape-community-urban-dictionary.p.rapidapi.com/define";
  constructor(private _http:HttpClient) {
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
  getWords(){
    return this.words;
  }
  separateDefinitions(WordDetails){
    
    for (let index = 0; index < this.WordDetails.length; index++) {
      this.wordData = WordDetails[index];
      console.log(this.WordDetails);
    }
  }
  private handleError(err:HttpErrorResponse) {
    console.log('UDApiService: ', err.message);
    return Observable.throw(err.message);
 }
}
