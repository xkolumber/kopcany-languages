export interface Theme{
    nazov_temy:{
        sk:string;
        cz:string;
        en:string;
    };
    _id: string;
    slug: {
        current: string;
    };
    titulna_foto: string;
    kresleny_obrazok: string;
    uvodny_text: Activity[]; 
    youtube_link: string;
    mapa_oblastt: string;
    pokracovanie_text:Activity[]; 
    komentar_ku_mape:Activity[]; 
    skupina_obrazkov:string;
    komentar_skupina_obrazkov:Activity[]; 
    dalsia_foto:string;
    komentar_fotka:Activity[]; 
    skupina_obrazkov2:string;
    komentar_skupina_obrazkov2:Activity[]; 

    dalsia_foto2:string;
    komentar_fotka2:Activity[]; 
    skupina_obrazkov_3:string;
    komentar_skupina_obrazkov3:Activity[]; 
    dalsia_foto3:string;
    komentar_fotka3:Activity[]; 
   
    projekt_aktivity_hlavne:Activity[]; 
}

interface Activity {
    language: 'sk' | 'en' | 'cz';
    content:  Block[];
    
  }
  interface Block {
    _type: string; 
    children: { text: string }[]; 
  
  }