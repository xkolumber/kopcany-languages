
export interface Baroque{
    nazov_temy:{
        sk:string;
        cz:string;
        en:string;
    };
    _id: string;
    slug: {
        current: string;
    };
    uvodny_text:Activity[];

    titulna_foto: string;
    kresleny_obrazok: string;
    mapa:string;
    text_pred_mapou:{
        sk:string;
        cz:string;
        en:string;
    };
    nadpis_sekcie1:{
        sk:string;
        cz:string;
        en:string;
    };
    popis_sekcie1:Activity[];
    skupina_obrazkov:string;
    nadpis_sekcie2:{
        sk:string;
        cz:string;
        en:string;
    };
    popis_sekcie2:Activity[];
    skupina_obrazkov2:string;
    nadpis_sekcie3:{
        sk:string;
        cz:string;
        en:string;
    };
    popis_sekcie3:Activity[];
    three_d_foto:string;
    skupina_obrazkov3:string;

}
interface Activity {
    language: 'sk' | 'en' | 'cz';
    content:  Block[];
    
  }
  interface Block {
    _type: string; 
    children: { text: string }[]; 
  
  }