import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("partners");


  return (
    <>
      <h2 className="text-black partners_title">{t("title")}</h2>
      <p className="text-black"> {t("description")}</p>
      <div className="partners">
        
      <img src="/all_partners.jpg" alt="All Partners images" className="partners_img_phone" /> 


     
          <img  src="/partner0.svg" alt="Parner 1 logo"  className="partner_img_first"/>
          <img  src="/partner1.svg" alt="Parner 1 logo"  className="partner_img_second"/>
          <img  src="/partner2.jpg" alt="Parner 1 logo"  className="partner_img_third"/>
          <img  src="/partner3.svg" alt="Parner 1 logo"  className="partner_img_fourth"/> 
    
       
        {/* /}
        {/* <Image
          src="/partner0.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Partner 1 logo"
          className="partner_img_first"
        />
        <Image
          src="/partner1.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Partner 2 logo"
          className="partner_img_second"
        />
        <Image
          src="/partner2.jpg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Partner 3 logo"
          className="partner_img_third"
        />
        <Image
          src="/partner3.svg"
          width={0}
          height={0}
          sizes="100vw"
          alt="Partner 4 logo"
          className="partner_img_fourth"
        /> */}
      </div>
    </>
  );
};

export default Partners;
