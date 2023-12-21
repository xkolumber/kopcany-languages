import { useTranslations } from "next-intl";
import Image from "next/image";

const Partners = () => {
  const t = useTranslations("partners");

  return (
    <>
      <h2 className="text-black partners_title">{t("title")}</h2>
      <p className="text-black"> {t("description")}</p>
      <div className="partners">
        <Image
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
        />
      </div>
    </>
  );
};

export default Partners;
