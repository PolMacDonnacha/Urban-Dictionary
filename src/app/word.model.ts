export class Word {
    Word:string;
    Definition:string;
    Author:string;
    Thumbs_up:number;
    Thumbs_down:number;
    Example:string;
    Written_on:string;

   constructor(_word:string, _definition:string, _author:string ,_thumbs_up:number, _thumbs_down:number, _example:string, _written_on:string)
   {
       this.Word=_word;
       this.Definition=_definition;
       this.Author=_author;
       this.Thumbs_up=_thumbs_up;
       this.Thumbs_down=_thumbs_down;
       this.Example=_example;
       this.Written_on=_written_on;
   }
}