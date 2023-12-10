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
    uvodny_text:{
        sk:string;
        cz:string;
        en:string;
    };
    foto_stred_clanku: string;
    mapa_oblastt: string;
    pokracovanie_text:{
        sk:string;
        cz:string;
        en:string;
    };
    skupina_obrazkov:string;
    komentar_skupina_obrazkov:{
        sk:string;
        cz:string;
        en:string;
    };
    dalsia_foto:string;
    komentar_fotka:{
        sk:string;
        cz:string;
        en:string;
    };
    skupina_obrazkov2:string;
    komentar_skupina_obrazkov2:{
        sk:string;
        cz:string;
        en:string;
    };

    dalsia_foto2:string;
    komentar_fotka2:{
        sk:string;
        cz:string;
        en:string;
    };

    skupina_obrazkov_3:string;
    komentar_skupina_obrazkov3:{
        sk:string;
        cz:string;
        en:string;
    };
    dalsia_foto3:string;
    komentar_fotka3:{
        sk:string;
        cz:string;
        en:string;
    };
}