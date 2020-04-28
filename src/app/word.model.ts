export class Word {
    word:string;
    definition:string;
    author:string;
    thumbs_up:number;
    thumbs_down:number;
    example:string;
    written_on:string;

   constructor(_word:string, _definition:string, _author:string ,_thumbs_up:number, _thumbs_down:number, _example:string, _written_on:string)
   {
       this.word=_word;
       this.definition=_definition;
       this.author=_author;
       this.thumbs_up=_thumbs_up;
       this.thumbs_down=_thumbs_down;
       this.example=_example;
       this.written_on=_written_on;
   }
}