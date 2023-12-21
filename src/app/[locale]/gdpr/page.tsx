import Footer from "@/components/Footer";
import NavbarSecond from "@/components/NavbarSecond";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  
  const p =  useTranslations("navbar");

  const home = p("home");
  const about_project = p("about_project");
  const monuments = p("monuments");
  const experience = p("experience");
  const masaryk = p("masaryk");
  const contact = p("contact");

  
  const navbar_array = [home, about_project, monuments, experience, masaryk, contact];
  return (
    <>
      <div className="padding_content gdpr intro_padding">
        <NavbarSecond black={true}  navbar_array={navbar_array} />
        <h2 className="gdpr_title">Obec Kopčany</h2>
        <h4>Vyhlásenie o ochrane súkromia</h4>
        <p>
          {" "}
          Všeobecné nariadenie o ochrane osobných údajov (General Data
          Protection Regulation čiže GDPR), účinné od 25. 5. 2018 má za cieľ
          chrániť práva (predovšetkým) občanov Európskej únie proti
          neoprávnenému nakladaniu s ich osobnými údajmi.
        </p>
        <h5>Osobné údaje, ktoré zhromažďujeme na webových stránkach</h5>
        <p>
          Naše webstránky môžete navštevovať a používať bez toho, aby ste nám
          dávali akékoľvek osobné údaje. Osobné údaje zhromažďujeme len v
          prípade, že nám ich sami dobrovoľne poskytnete. Údaje, ktoré
          spracúvame, sa použijú výhradne na účel, na ktorý ste dali súhlas, ak
          platná legislatíva neumožňuje inak. Budeme uchovávať vaše osobné údaje
          len po nevyhnutnú dobu nato, aby sa dosiahol účel služby, ktorú ste si
          vyžiadali, alebo účel, na ktorý ste dali svoj súhlas, ak platná
          legislatíva neumožňuje inak.{" "}
        </p>
        <br></br>
        <h5>Dotknuté osoby majú právo</h5>
        <p>
          <b>Právo na prístup</b> umožňuje dotknutej osobe zistiť, či a prípadne
          aké údaje o jej osobe prevádzkovateľ spracúva a uchováva, účel, právny
          základ, spôsob a dobu spracúvania a príjemcov, ktorým sa osobné údaje
          sprístupnia. Rovnako má každá dotknutá osoba právo na kópie všetkých
          osobných údajov, ktoré o nej prevádzkovateľ spracúva. Tým by však
          nikdy nemali byť dotknuté práva tretích osôb (najmä právo na ochranu
          ich osobných údajov, duševného vlastníctva či obchodného tajomstva),
          prípadne ohrozená národná bezpečnosť. Dotknuté osoby majú byť
          informované aj o tom, či sa ich osobné údaje využívajú na automatické
          rozhodovanie alebo profilovanie. V tejto súvislosti má dotknutá osoba
          právo dozvedieť sa aj to, aké postupy, význam a predpokladané dôsledky
          takéto spracúvanie môže predstavovať.
        </p>
        <p>
          <b> Právo na opravu</b> umožňuje dotknutej osobe dožadovať sa nápravy
          v prípade, že zistí, že evidované údaje sú nesprávne, nepresné alebo
          neúplné. Prevádzkovateľ osobných údajov musí zabezpečiť opravu bez
          zbytočného odkladu.
        </p>
        <p>
          <b>Právo na vymazanie</b> (čiže právo na zabudnutie) umožňuje
          dotknutej osobe požadovať odstránenie svojich údajov z evidencie
          prevádzkovateľa, ak nastane niektorý z týchto prípadov:
        </p>
        <ul>
          <li>
            osobné údaje už nie sú potrebné na účely, na ktoré sa získavali
            alebo inak spracúvali;
          </li>
          <li>
            {" "}
            spracúvanie bolo založené na súhlase, ktorý bol odvolaný, a zároveň
            neexistuje iný právny dôvod na ich spracúvanie;
          </li>
          <li>
            dotknutá osoba vznesie námietku proti spracúvaniu založenému na
            oprávnených záujmoch a tieto oprávnené záujmy neprevažujú záujem na
            ochranu osobných údajov dotknutej osoby;{" "}
          </li>
          <li>
            osobné údaje sa spracúvajú nezákonne, napríklad po uplynutí zákonom
            stanovej doby spracúvania;
          </li>
          <li>
            osobné údaje musia byť vymazané, aby sa splnila zákonná povinnosť
            podľa práva Únie alebo práva členského štátu, ktorému prevádzkovateľ
            podlieha;
          </li>
          <li>
            rodič nesúhlasí so spracúvaním osobných údajov svojho dieťaťa (ak
            ide o spracúvanie osobných údajov na základe súhlasu pre služby
            informačnej spoločnosti podľa čl. 8 GDPR).
          </li>
        </ul>

        <p>
          V prípade uplatnenia práva na vymazanie je dotknutá osoba oprávnená
          požadovať vymazanie všetkých výskytov a odkazov na jej osobné údaje vo
          všetkých ich kópiách.
        </p>
        <br></br>
        <p>
          <b>Právo na obmedzenie spracúvania</b> ukladá prevádzkovateľovi
          osobných údajov obmedziť spracúvanie osobných údajov dotknutej osoby z
          nasledujúcich dôvodov:{" "}
        </p>
        <ul>
          <li>
            ak dotknutá osoba namieta, že spracúvané údaje sú nepresné, je možné
            požadovať obmedzenie spracúvania na obdobie potrebné na overenie
            presnosti osobných údajov;
          </li>
          <li>
            ak je spracúvanie protizákonné, môže dotknutá osoba namiesto
            vymazania požadovať obmedzenie spracúvania (teda aby ich
            prevádzkovateľ v stanovenom období len uchovával, ale inak
            nespracúval);
          </li>
          <li>
            hoci osobné údaje už nie sú potrebné na vytýčený účel
            prevádzkovateľa, môžu byť aj naďalej potrebné pre dotknutú osobu,
            napríklad na obhajobu jej prípadných právnych nárokov;.
          </li>
          <li>
            ak už dotknutá osoba vzniesla námietku proti spracúvaniu údajov, je
            oprávnená zároveň požadovať obmedzenie spracúvania na čas potrebný
            na overenie, či oprávnené záujmy prevádzkovateľa prevážia nad
            záujmami dotknutej osoby.
          </li>
        </ul>

        <p>
          <b>Právo namietať</b>umožňuje dotknutej osobe ohradiť sa proti
          spracúvaniu jej osobných údajov, založenému na oprávnenom alebo
          verejnom záujme prevádzkovateľa osobných údajov. V prípade námietok
          dotknutej osoby má prevádzkovateľ povinnosť overiť a riadne zdôvodniť,
          či oprávnený alebo verejný záujem prevažuje nad záujmom dotknutej
          osoby na ochrane jej osobných údajov.
        </p>
        <p>
          <b>Právo na prenosnosť</b>umožňuje dotknutej osobe získať svoje osobné
          údaje v štruktúrovanej strojovo čitateľnej podobe. Môže tiež
          požadovať, aby tieto údaje boli odovzdané priamo inému
          prevádzkovateľovi, ak je to (technicky) možné a uskutočniteľné. Právo
          sa však uplatní len v prípadoch, kedy je spracúvanie osobných údajov
          založené na súhlase či zmluve.
        </p>
        <p>
          <b>Právo podať sťažnosť dozornému orgánu</b>
          <br></br>Dotknutá osoba má právo podať sťažnosť dozornému orgánu,
          ktorým je:
        </p>

        <p>Úrad na ochranu osobných údajov Slovenskej republiky</p>

        <p>Hraničná 12</p>

        <p>820 07 Bratislava 27</p>

        <p>tel. číslo: +421 /2/ 3231 3214</p>

        <p>email: statny.dozor@pdp.gov.sk</p>

        <p>https://dataprotection.gov.sk</p>

        <h5>Všetky tieto práva môžete uplatniť:</h5>
        <p>ústne – na nižšie uvedenej adrese prevádzkovateľa</p>
        <p>
          písomne – osobne, poštou alebo elektronickou poštou prostredníctvom
          nižšie uvedených kontaktných údajoch prevádzkovateľa
        </p>
        <p>Obecný úrad</p>
        <p>Kollárova 318</p>
        <p>908 48 KOPČANY</p>
        <p>e-mailom: obec@kopcany.sk</p>
        <p>elektronickým podaním: obec@kopcany.sk</p>
        <p>telefonicky na tel. čísle: 0908 717 876</p>
        <p>Úradné hodiny prevádzkovateľa </p>
        <ul>
          <li>pondelok: 8:00 - 13:00</li>
          <li>utorok: 8:00 - 15:30 12:00 - 12:30</li>
          <li>streda: 8:00 - 17:00 12:00 - 12:30</li>
          <li>štvrtok: nestránkový deň</li>
          <li>piatok: 8:00 - 15:30 12:00 - 12:30</li>
        </ul>

        <h5>Lehota na vybavenie žiadosti:</h5>
        <p>
          Žiadosti prevádzkovateľ vybavuje do jedného mesiaca od ich doručenia.
          Lehotu je možné vo výnimočných prípadoch predĺžiť o dva mesiace, najmä
          pre komplexnosť a náročnosť prípadu, či celkový počet vybavovaných
          žiadostí. o čom musí byť dotknutá osoba zo strany prevádzkovateľa
          informovaná, a to vrátane dôvodov predĺženia.
        </p>
        <h5>Postup na uplatnenie týchto práv dotknutej osoby:</h5>

        <ol>
          <li>Prijatie žiadosti</li>
          <li>Identifikácia žiadateľa</li>
          <li>Vyhodnotenie žiadosti</li>
          <li>Rozhodnutie o žiadosti</li>
          <li>Výkon rozhodnutia</li>
          <li>Informovanie žiadateľa</li>
        </ol>
        <p></p>
        <h5>Kontakt na zodpovednú osobu:</h5>
        <p>PP Protect s.r.o.</p>
        <p>adresa: Antona Bernoláka 2, 071 01 Michalovce</p>
        <p>e-mail: zodpovednaosoba@ppprotect.sk</p>
      </div>
      <Footer />
    </>
  );
};

export default Page;
