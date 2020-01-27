export interface Place {
    title:string;
    city?:string;
    country?:string;
    keywords?:string;
    selected?:boolean;
    timestamp?:number;
    coordinates?:{
        longitude:number,
        latitude:number
    }
    photos?:string[];
}
