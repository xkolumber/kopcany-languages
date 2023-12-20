export interface My_event{
    nazov_podujatia:{
        sk:string;
        cz:string;
        en:string;
    };
    _id: string;
    slug: {
        current: string;
    };
    titulna_foto: string;
    text_podujatie:{
        sk:string;
        cz:string;
        en:string;
    };
    plagat: string;
    kde:{
        sk:string;
        cz:string;
        en:string;
    };
    kedy:string;
    cas:string;
    vstup_bezna_cena:string;
    vstup_vip:string;

}