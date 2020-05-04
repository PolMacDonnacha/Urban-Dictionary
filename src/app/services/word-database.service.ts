import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse,HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap,map } from 'rxjs/operators';
import { IUDResponse, WordDetails, Word } from 'src/app/interfaces/UDResponse';
import { WordDetailsComponent } from 'src/app/word-details/word-details.component';
import {AngularFirestoreCollection, AngularFirestore} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class WordDatabaseService {
  wordDataCollection:AngularFirestoreCollection<WordDetails>;

  constructor(private _http:HttpClient, private _afs:AngularFirestore) {
    this.wordDataCollection=_afs.collection<WordDetails>("word-data");
   }

   addWordData(word:WordDetails) :void
   {
    this.wordDataCollection.add(JSON.parse(JSON.stringify(word)));
   }
}
