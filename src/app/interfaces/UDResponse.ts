
export interface IUDResponse
{
     list:WordDetails[];

}
export interface WordDetails
{
     word:string;
     definition:string;
     author:string;
     thumbs_up:number;
     thumbs_down:number;
     example:string;
     written_on:string;
    
}
