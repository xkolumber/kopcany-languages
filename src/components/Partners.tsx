import { useTranslations } from "next-intl";

const Partners = () => {
  const t = useTranslations("partners");

  return (
    <>
      <h2 className="text-black partners_title">{t("title")}</h2>
      <p className="text-black"> {t("description")}</p>
      <div className="partners">
        <img
          src="/all_partners.jpg"
          alt="All Partners images"
          className="partners_img_phone"
        />

        <div className="partners_row">
          <img
            src="/partner0.svg"
            alt="Parner 1 logo"
            className="partner_img_first"
          />
          <img
            src="/partner1.svg"
            alt="Parner 1 logo"
            className="partner_img_second"
          />
        </div>
        <div className="partners_row2">
          <img
            src="/partner2.jpg"
            alt="Parner 1 logo"
            className="partner_img_third"
          />
          <img
            src="/partner3.svg"
            alt="Parner 1 logo"
            className="partner_img_fourth"
          />
        </div>
      </div>
    </>
  );
};

export default Partners;
