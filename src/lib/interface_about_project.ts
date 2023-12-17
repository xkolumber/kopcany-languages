
export interface About_project{
    nazov_temy:{
        sk:string;
        cz:string;
        en:string;
    };
    _id: string;
    slug: {
        current: string;
    };
    financovanie_text:{
        sk:string;
        cz:string;
        en:string;
    };
    titulna_foto: string;
    kresleny_obrazok: string;
    uvodny_text:{
        sk:string;
        cz:string;
        en:string;
    };
   
    foto_stred_clanku: string;
    mapa:string;
    projekt_ciel:{
        sk:string;
        cz:string;
        en:string;
    };
    projekt_vysledok:{
        sk:string;
        cz:string;
        en:string;
    };
    projekt_aktivity: Activity[]; 
    projekt_aktivity_hlavne:Activity[]; 
    three_d_foto:string;
    rozpocet:Activity[]; 

}
interface Activity {
    language: 'sk' | 'en' | 'cz';
    content:  Block[];
    
  }
  interface Block {
    _type: string; 
    children: { text: string }[]; 
  
  }