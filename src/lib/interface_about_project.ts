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
    titulna_foto: string;
    kresleny_obrazok: string;
    uvodny_text:{
        sk:string;
        cz:string;
        en:string;
    };
    foto_stred_clanku: string;
    pokracovanie_text:{
        sk:string;
        cz:string;
        en:string;
    };
    skupina_obrazkov:string;
    zaverecna_foto:string;

}